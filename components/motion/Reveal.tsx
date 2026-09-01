"use client";

import type { ReactNode } from "react";
import { useInView } from "./useInView";

type Variant = "up" | "fade" | "scale" | "rise-lg";

/**
 * Scroll-triggered entrance. Transform + opacity only, so the compositor
 * does all the work and nothing triggers layout.
 *
 * Only vertical and scale movement is used — never horizontal — because a
 * horizontal reveal has to be mirrored in RTL and silently looks wrong in
 * Arabic if you forget. Vertical motion reads identically in both directions.
 *
 * The hidden state and the reduced-motion escape hatch both live in CSS
 * (see `app/globals.css`), so a reduced-motion visitor and a visitor whose
 * JavaScript never runs both see the content immediately.
 */
export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  /** Stagger, in milliseconds. Keep increments small — 60–90ms reads as one gesture. */
  delay?: number;
  once?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ once });

  return (
    <div
      ref={ref}
      className={`chs-reveal chs-reveal--${variant} ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
