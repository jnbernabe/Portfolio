import type { PropsWithChildren } from "react";

export const Badge = ({ children }: PropsWithChildren) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
    {children}
  </span>
);
