"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * The scroll-driven engagement narrative.
 *
 * On desktop the section pins to the viewport and the four stages advance as
 * you scroll through it, with a concentric dial filling ring by ring — the
 * brand motif doing actual work rather than sitting in the background.
 *
 * On mobile it degrades to a plain stacked list. That's deliberate: pinned
 * scroll sections fight with touch momentum and with browser chrome that
 * resizes the viewport mid-scroll. The switch is done in CSS (see
 * `.path-stage` in globals.css) rather than by rendering different trees,
 * so the content exists exactly once in the DOM and a screen reader reads
 * all four stages in order at any width.
 */
export default function PinnedPath({ dict }: { dict: Dictionary }) {
  const stages = dict.path.stages;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRingRef = useRef<SVGCircleElement | null>(null);
  const [active, setActive] = useState(0);

  // Outer ring geometry — kept here so the dash maths has a single source.
  const R = 148;
  const CIRCUMFERENCE = 2 * Math.PI * R;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Below the lg breakpoint the section isn't pinned, so there's no
    // scroll-linked state to track at all.
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (!desktop.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const travel = container.offsetHeight - window.innerHeight;
      if (travel <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), travel);
      const progress = scrolled / travel;

      // Slight bias so a stage is considered "reached" a little before its
      // exact threshold — it feels responsive rather than laggy.
      const index = Math.min(stages.length - 1, Math.floor(progress * stages.length + 0.08));
      setActive((prev) => (prev === index ? prev : index));

      if (progressRingRef.current) {
        progressRingRef.current.style.strokeDashoffset = String(
          CIRCUMFERENCE * (1 - Math.min(1, progress * 1.02)),
        );
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [stages.length, CIRCUMFERENCE]);

  /** Jump to a stage — keyboard users shouldn't have to scroll four screens. */
  const goToStage = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const travel = container.offsetHeight - window.innerHeight;
    const target =
      container.offsetTop + (travel * (index + 0.35)) / stages.length;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative lg:h-[420vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
        <div className="container-content w-full">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
            {/* ---- The dial ---- */}
            <div className="hidden lg:block">
              {/* The overlay below is positioned against this wrapper, which
                  matches the square SVG exactly — so the stage number lands on
                  the dial's true centre at any column width. */}
              <div className="relative w-full max-w-[30rem]">
              <svg viewBox="0 0 340 340" className="w-full" aria-hidden="true">
                {/* Faint outer field */}
                <circle cx="170" cy="170" r={R} fill="none" stroke="#FAF8F4" strokeOpacity="0.12" strokeWidth="1" />
                {/* Overall progress arc */}
                <circle
                  ref={progressRingRef}
                  cx="170"
                  cy="170"
                  r={R}
                  fill="none"
                  stroke="#B9863F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE}
                  transform="rotate(-90 170 170)"
                  style={{ transition: "stroke-dashoffset 120ms linear" }}
                />
                {/* One ring per stage, lighting up from the inside out */}
                {stages.map((_, i) => {
                  const r = 42 + i * 26;
                  const reached = i <= active;
                  return (
                    <circle
                      key={i}
                      cx="170"
                      cy="170"
                      r={r}
                      fill="none"
                      stroke={reached ? "#C99A4E" : "#FAF8F4"}
                      strokeOpacity={reached ? 0.95 : 0.14}
                      strokeWidth={reached ? 1.75 : 1}
                      style={{ transition: "stroke 600ms var(--ease-vault), stroke-opacity 600ms var(--ease-vault), stroke-width 600ms var(--ease-vault)" }}
                    />
                  );
                })}
                {/* Core */}
                <circle cx="170" cy="170" r="13" fill="#B9863F" fillOpacity="0.14" />
                <circle cx="170" cy="170" r="5" fill="#C99A4E" />
              </svg>

              {/* Stage number sitting over the dial's centre */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl text-paper-50/90">{stages[active]?.n}</span>
              </div>
              </div>
            </div>

            {/* ---- Stage copy ---- */}
            <div>
              {/* Stage rail */}
              <div className="mb-10 hidden lg:flex lg:gap-2" role="tablist" aria-label={dict.path.h2}>
                {stages.map((stage, i) => (
                  <button
                    key={stage.n}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => goToStage(i)}
                    className="group flex-1 pt-3 text-start"
                  >
                    <span
                      className={`block h-px w-full transition-colors duration-700 ${
                        i <= active ? "bg-brass-400" : "bg-paper-50/20"
                      }`}
                    />
                    <span
                      className={`mt-3 block text-micro font-semibold uppercase tracking-widest transition-colors duration-500 ${
                        i === active ? "text-brass-200" : "text-paper-50/40 group-hover:text-paper-50/70"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* All four stages live in one grid cell on desktop so they
                  cross-fade in place; on mobile they simply stack. */}
              <div className="lg:grid">
                {stages.map((stage, i) => (
                  <div
                    key={stage.n}
                    data-active={i === active}
                    className="path-stage border-t border-paper-50/15 pt-8 lg:col-start-1 lg:row-start-1 lg:border-0 lg:pt-0"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-brass-400 lg:hidden">{stage.n}</span>
                      <p className="text-micro font-semibold uppercase tracking-widest text-brass-200 lg:hidden">
                        {stage.label}
                      </p>
                    </div>
                    <h3 className="mt-3 max-w-xl font-display text-h3 text-paper-50 lg:mt-0">{stage.title}</h3>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper-50/75">{stage.body}</p>
                    <p className="mt-7 inline-flex max-w-xl border-s-2 border-brass-500 ps-4 text-small text-brass-200">
                      {stage.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
