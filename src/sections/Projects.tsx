import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { trackEvent } from "@/utils/analytics";

export const Projects = () => (
  <section id="projects" className="px-6 py-12">
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
              {project.imageUrl && (
                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <img 
                    src={`${import.meta.env.BASE_URL}${project.imageUrl}`}
                    alt={`${project.title} demo`} 
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              )}
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
                  onClick={() => trackEvent({ category: "Projects", action: "Click", label: `Live: ${project.title}` })}
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
                  onClick={() => trackEvent({ category: "Projects", action: "Click", label: `Repo: ${project.title}` })}
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

