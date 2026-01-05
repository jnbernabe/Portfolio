import { SectionHeading } from "@/components/SectionHeading";

const highlights = [
  "Specialized background in Artificial Intelligence and Data Engineering",
  "Proven track record optimizing data pipelines and building observability",
  "Combines Python automation with rigorous scientific integrity"
];

export const About = () => (
  <section id="about" className="px-6 py-12">
    <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[3fr,2fr] md:items-center">
      <div>
        <SectionHeading eyebrow="About">
          Delivering high-integrity data solutions
        </SectionHeading>
        <div className="space-y-6 text-base leading-relaxed text-slate-300">
          <p>
            I&apos;m Jamaal Bernabe, a Software Developer and Data Analyst with a specialized background in Artificial Intelligence and Data Engineering. I combine strong Python automation skills with a rigorous scientific background to deliver accurate, high-integrity data solutions.
          </p>
          <p>
            At Aficio AI, I optimized data pipelines by 19% through automated ingestion of unstructured sources and built observability dashboards to visualize system performance. I focus on reducing latency, integrating ML components, and ensuring reproducible, well-monitored codebases.
          </p>
          <div className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-glow backdrop-blur">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
                <p className="text-sm text-slate-200">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-6 rounded-3xl border border-white/5 bg-slate-950/60 p-8 text-sm text-slate-300 shadow-glow backdrop-blur">
        <h3 className="font-display text-xl font-semibold text-white">Capabilities</h3>
        <ul className="space-y-3">
          {[
            "Architecting event-driven ingestion and data workflows",
            "Building full-stack web apps with robust testing",
            "Standing up CI/CD, monitoring, and observability",
            "Partnering with stakeholders to deliver usable solutions"
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white/50" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);