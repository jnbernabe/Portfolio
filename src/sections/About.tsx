import { SectionHeading } from "@/components/SectionHeading";

const highlights = [
  "Contract developer for AI and data teams, including Aficio AI",
  "Comfortable across JavaScript, Java, Python, and cloud platforms",
  "Blend of product intuition, QA rigor, and DevOps discipline"
];

export const About = () => (
  <section id="about" className="px-6 py-24">
    <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[3fr,2fr] md:items-center">
      <div>
        <SectionHeading eyebrow="About">
          Shipping dependable software with purpose.
        </SectionHeading>
        <div className="space-y-6 text-base leading-relaxed text-slate-300">
          <p>
            I&apos;m Jamaal Bernabe, a Toronto-based full-stack software developer who builds scalable experiences for data-heavy teams. My background spans automation, cloud infrastructure, and end-user applications, grounded in a commitment to clean code and measurable impact.
          </p>
          <p>
            Recent work includes architecting ingestion pipelines for 100+ unstructured sources, integrating LLM-powered insights, and hardening QA suites that support faster releases. I thrive in collaborative environments where product, engineering, and operations intersect.
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