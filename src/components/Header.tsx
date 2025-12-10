import { useState } from "react";
import { navItems } from "@/data/navigation";
import { trackEvent } from "@/utils/analytics";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a 
          href="#hero" 
          className="font-display text-xl font-semibold tracking-tight text-white"
          onClick={() => trackEvent({ category: "Header", action: "Click", label: "Logo" })}
        >
          Jamaal<span className="text-accent">Bernabe</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition hover:text-white"
              onClick={() => trackEvent({ category: "Header", action: "Navigation", label: item.label })}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a 
            href="mailto:JNBernabe@gmail.com" 
            className="btn-primary"
            onClick={() => trackEvent({ category: "Header", action: "Contact", label: "Email Me (Desktop)" })}
          >
            Email Me
          </a>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-accent md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden">
          <ul className="space-y-2 border-t border-white/5 bg-slate-950/95 px-6 py-4 text-sm font-medium text-slate-200">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    close();
                    trackEvent({ category: "Header", action: "Navigation", label: `${item.label} (Mobile)` });
                  }}
                  className="block rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:JNBernabe@gmail.com"
                onClick={() => {
                  close();
                  trackEvent({ category: "Header", action: "Contact", label: "Email Me (Mobile)" });
                }}
                className="btn-primary w-full justify-center"
              >
                Email Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
