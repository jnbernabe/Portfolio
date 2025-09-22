import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export const Experience = () => (
  <section id="experience" className="px-6 py-24">
    <div className="mx-auto max-w-content">
      <SectionHeading eyebrow="Experience">
        Applying engineering rigor across data and QA
      </SectionHeading>
      <div className="space-y-8">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="section-card"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-soft">
                  {item.company}
                </p>
              </div>
              <span className="text-sm text-slate-300">{item.period}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

