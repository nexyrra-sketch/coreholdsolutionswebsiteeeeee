"use client";

import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "./useInView";

/**
 * Counts a figure up when it scrolls into view.
 *
 * Uses the same expo-out curve as the rest of the site's motion, so the
 * number decelerates into place rather than stopping dead. Reduced-motion
 * visitors get the final value immediately — the information is the point,
 * the animation is not.
 */
export default function CountUp({
  to,
  decimals = 0,
  duration = 1400,
  prefix = "",
  suffix = "",
  className = "",
}: {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();
    // Expo-out: fast departure, long settle. Matches --ease-vault.
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(to * ease(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, to, duration]);

  // Always Latin digits, in both locales. The Arabic side of this site uses
  // Latin numerals throughout (the countdown, the revenue figures in the
  // copy), and an "ar-AE" locale format would switch these to Arabic-Indic
  // digits — correct in isolation, inconsistent with every other number on
  // the page.
  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
