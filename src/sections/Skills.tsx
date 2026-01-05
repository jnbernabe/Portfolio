import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";
import { getSkillIcon } from "@/utils/skillUtils";

export const Skills = () => (
  <section id="skills" className="px-6 py-12">
    <div className="mx-auto max-w-content">
      <SectionHeading eyebrow="Capabilities">
        Stack powering automation and delivery
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="section-card">
            <h3 className="font-display text-xl font-semibold text-white">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
              {category.skills.map((skill) => {
                const Icon = getSkillIcon(skill);
                return (
                  <li
                    key={skill}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-accent/50 hover:bg-white/10 hover:text-white"
                  >
                    {Icon && <Icon className="h-4 w-4 text-accent" />}
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

