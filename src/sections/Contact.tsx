import { SectionHeading } from "@/components/SectionHeading";

export const Contact = () => (
  <section id="contact" className="px-6 py-12">
    <div className="mx-auto max-w-content">
      <div className="section-card">
        <SectionHeading eyebrow="Let's Connect">
          Ready to collaborate on your next build.
        </SectionHeading>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
          I&apos;m currently exploring full-time and contract opportunities where I can apply cloud-native engineering, automation, and a user-focused mindset. Share what you&apos;re working on and I&apos;ll reply quickly.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <a href="mailto:JNBernabe@gmail.com" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-accent hover:text-white">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-soft">
              Email
            </h3>
            <p className="mt-2 text-lg font-semibold text-white">JNBernabe@gmail.com</p>
            <p className="mt-3 text-sm text-slate-300">Send a quick overview of the problem space, tech stack, and timeline.</p>
          </a>
          <a
            href="https://github.com/jnbernabe"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-accent hover:text-white"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-soft">
              GitHub
            </h3>
            <p className="mt-2 text-lg font-semibold text-white">github.com/jnbernabe</p>
            <p className="mt-3 text-sm text-slate-300">Browse recent projects, automation experiments, and cloud deployments.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jamaalbernabe/"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-accent hover:text-white"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-soft">
              LinkedIn
            </h3>
            <p className="mt-2 text-lg font-semibold text-white break-all">linkedin.com/in/jamaalbernabe</p>
            <p className="mt-3 text-sm text-slate-300">Connect to discuss opportunities, collaborations, and community work.</p>
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Jamaal_Bernabe_Resume.pdf`}
            download
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-accent hover:text-white"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-soft">
              Resume
            </h3>
            <p className="mt-2 text-lg font-semibold text-white">Download a copy</p>
            <p className="mt-3 text-sm text-slate-300">Review my latest experience, education, and certifications in one place.</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);
