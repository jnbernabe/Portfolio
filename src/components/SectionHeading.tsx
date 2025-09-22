import type { PropsWithChildren } from "react";

interface SectionHeadingProps extends PropsWithChildren {
  eyebrow?: string;
}

export const SectionHeading = ({ children, eyebrow }: SectionHeadingProps) => (
  <div className="mb-8 flex flex-col gap-2 text-left">
    {eyebrow && (
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-soft">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
      {children}
    </h2>
  </div>
);
