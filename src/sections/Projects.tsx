import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const Projects = () => (
  <section id="projects" className="px-6 py-24">
    <div className="mx-auto max-w-content">
      <SectionHeading eyebrow="Selected Work">
        Bringing data, automation, and UX together
      </SectionHeading>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="section-card flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-accent-soft">
                <span>{project.period}</span>
                <span>Case Study</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-slate-200">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  View live
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  GitHub
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

