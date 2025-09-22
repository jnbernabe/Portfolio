import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export const Skills = () => (
  <section id="skills" className="px-6 py-24">
    <div className="mx-auto max-w-content">
      <SectionHeading eyebrow="Capabilities">
        Stack powering automation and delivery.
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="section-card">
            <h3 className="font-display text-xl font-semibold text-white">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

