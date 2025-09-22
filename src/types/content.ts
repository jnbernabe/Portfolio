export type SectionId = "about" | "experience" | "projects" | "skills" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  period: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
