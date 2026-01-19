
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RESUME_PATH = path.join(__dirname, '../public/Jamaal_Bernabe_Resume.pdf');
const EXPERIENCE_PATH = path.join(__dirname, '../src/data/experience.ts');

async function parseResume() {
    console.log('Reading resume...');
    const dataBuffer = fs.readFileSync(RESUME_PATH);
    const pdfData = await pdf(dataBuffer);
    const text = pdfData.text;

    const lines = text.split('\n').map(l => l.trim()).filter(l => l);
    
    // Find EXPERIENCE section
    const expStartIndex = lines.findIndex(l => l === 'EXPERIENCE');
    const expEndIndex = lines.findIndex(l => l === 'EDUCATION' || l === 'SKILLS' && lines.indexOf(l) > expStartIndex); // Education usually follows, or Skills

    // Fallback if EDUCATION not found but EXPERIENCE is
    const limitIndex = expEndIndex > -1 ? expEndIndex : lines.length;

    if (expStartIndex === -1) {
        throw new Error('Could not find EXPERIENCE section in resume.');
    }

    const expLines = lines.slice(expStartIndex + 1, limitIndex);

    const jobs = [];
    let currentJob = null;

    // Regex for Job Header: Role | Company | Location Dates
    // Example: Software Developer | Aficio AI | Remote, USA Feb 2024 – Dec 2025
    // Note: The date part might capture "Feb 2024 - Present" or similar.
    // The location part is unstructured.
    // We look for the pattern: Role | Company | ... Date
    
    const headerRegex = /^(.+?)\s\|\s(.+?)\s\|\s.*?\s((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}.*)$/;

    for (const line of expLines) {
        const match = line.match(headerRegex);
        if (match) {
            if (currentJob) {
                jobs.push(currentJob);
            }
            const role = match[1].trim();
            const company = match[2].trim();
            const period = match[3].trim();
            
            currentJob = {
                company,
                role,
                period,
                achievements: []
            };
        } else if (currentJob) {
            // Bullet point parsing
            // Check if line starts with bullet char
            const isBullet = line.startsWith('•') || line.startsWith('-') || line.startsWith('·');
            
            if (isBullet) {
                const content = line.replace(/^[•\-·]\s*/, '').trim();
                currentJob.achievements.push(content);
            } else {
                // Continuation of previous bullet logic
                if (currentJob.achievements.length > 0) {
                    currentJob.achievements[currentJob.achievements.length - 1] += ' ' + line;
                }
            }
        }
    }
    if (currentJob) {
        jobs.push(currentJob);
    }

    return jobs;
}

function parseExistingExperience(filePath) {
    if (!fs.existsSync(filePath)) return [];
    
    const content = fs.readFileSync(filePath, 'utf-8');
    // Extract the array content. Assume it starts with '[' and ends with '];' or ']'
    // This is a naive parser.
    // We can try to look for `export const experience: Experience[] = [...]`
    
    const match = content.match(/export const experience: Experience\[\] = (\[[\s\S]*?\]);/);
    if (match) {
        try {
            // We need to evaluate this string safely. 
            // Since it's TS, it might not be valid JS if it has type assertions, but usually data files are simple JS objects.
            // However, keys might not be quoted. `key: "value"`. JSON.parse requires quoted keys.
            // We can use `eval` or `new Function` if the content is trusted (it is user code).
            const arrayStr = match[1];
            // Wrap in parens to eval as expression
            const data = eval('(' + arrayStr + ')');
            return data;
        } catch (e) {
            console.error('Failed to parse existing experience TS file using eval:', e);
            return [];
        }
    }
    return [];
}

async function main() {
    try {
        const resumeJobs = await parseResume();
        console.log('Parsed jobs from resume:', resumeJobs.map(j => j.company));

        const existingJobs = parseExistingExperience(EXPERIENCE_PATH);
        console.log('Existing jobs found:', existingJobs.length);

        // Merge logic
        // We want to keep existing 'tech' if possible.
        
        const mergedJobs = resumeJobs.map(rJob => {
            const existing = existingJobs.find(e => {
                const companyMatch = e.company.toLowerCase().includes(rJob.company.toLowerCase()) || 
                                   rJob.company.toLowerCase().includes(e.company.toLowerCase());
                // Fuzzy role match
                const roleMatch = e.role.toLowerCase().trim() === rJob.role.toLowerCase().trim();
                
                return companyMatch || roleMatch;
            });

            let tech = [];
            // Use existing company name if we matched an existing record, 
            // to preserve the full name (e.g. Ministry... vs MCCSS)
            // But usually the resume is more 'current'. 
            // However, for MCCSS case, the full name might be preferred. 
            // Let's stick to Resume company name as the source of truth for the update,
            // UNLESS the existing name is significantly longer? 
            // Actually, user asked to update based on resume. Resume says MCCSS. 
            // So we stick to MCCSS. But we want the tech.

            if (existing && existing.tech) {
                tech = existing.tech;
            } else {
                // Try to infer tech from achievements if new
                tech = ["Update Me"]; 
            }

            return {
                company: rJob.company, // Or existing.company if we want to preserve old name
                role: rJob.role,
                period: rJob.period,
                tech: tech,
                achievements: rJob.achievements
            };
        });

        // Generate TS output
        const tsContent = `import type { Experience } from "@/types/content";

export const experience: Experience[] = ${JSON.stringify(mergedJobs, null, 2)};
`;

        fs.writeFileSync(EXPERIENCE_PATH, tsContent, 'utf-8');
        console.log(`Updated ${EXPERIENCE_PATH}`);

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
