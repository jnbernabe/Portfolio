export const Hero = () => (
  <section
    id="hero"
    className="relative overflow-hidden px-6 py-24 sm:py-28"
  >
    <div className="mx-auto flex max-w-content flex-col items-start gap-10">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="pointer-events-none absolute -top-20 right-[-30%] h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />
      </div>
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent-soft">
        Full-stack Developer | Data Analyst | QA Engineer
      </span>
      <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
        Building resilient cloud-native platforms that keep data flowing
      </h1>
      <p className="max-w-2xl text-lg text-slate-300">
        I am Jamaal Bernabe, a Toronto-based developer blending full-stack engineering, automation, and DevOps to deliver clean, scalable solutions. I thrive on shipping reliable APIs, tightening feedback loops with automation, and translating complex requirements into intuitive experiences.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a
          href={`${import.meta.env.BASE_URL}Jamaal_Bernabe_Resume.pdf`}
          download
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
        >
          Download Resume
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
        <a
          href="https://github.com/jnbernabe"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
        >
          Explore GitHub
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
      </div>
    </div>
  </section>
);
