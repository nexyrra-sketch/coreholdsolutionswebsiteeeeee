import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink";
  id?: string;
}) {
  const toneClass = tone === "ink" ? "bg-ink-950 text-paper-50" : "bg-paper-50 text-ink-950";
  return (
    <section id={id} className={`relative py-section-y ${toneClass} ${className}`}>
      <div className="container-content relative">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`text-micro font-body font-semibold uppercase tracking-widest mb-4 ${
        tone === "light" ? "text-brass-200" : "text-brass-600"
      }`}
    >
      {children}
    </p>
  );
}
