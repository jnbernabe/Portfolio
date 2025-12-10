import { trackEvent } from "@/utils/analytics";

export const Footer = () => (
  <footer className="border-t border-white/5 bg-slate-950/80">
    <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
      <p>
        &copy; {new Date().getFullYear()} Jamaal Bernabe. Built with React, TypeScript, and Tailwind CSS.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="mailto:JNBernabe@gmail.com"
          className="transition hover:text-white"
          onClick={() => trackEvent({ category: "Footer", action: "Contact", label: "Email" })}
        >
          Email
        </a>
        <a
          href="https://jnbernabe.github.io/Portfolio/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
          onClick={() => trackEvent({ category: "Footer", action: "Click", label: "Portfolio" })}
        >
          Portfolio
        </a>
        <a
          href="https://www.linkedin.com/in/jamaalbernabe/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
          onClick={() => trackEvent({ category: "Footer", action: "Social", label: "LinkedIn" })}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jnbernabe"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
          onClick={() => trackEvent({ category: "Footer", action: "Social", label: "GitHub" })}
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);
