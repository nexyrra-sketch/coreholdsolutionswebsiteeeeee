"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Depth for decorative layers only — never for content.
 *
 * Moves its child slower than the page as it passes through the viewport,
 * which reads as distance. `speed` is the fraction of scroll distance to
 * offset by: 0.12 is a hint, 0.3 is obvious. Keep it subtle; the brief
 * asked for a vault, and vaults don't bounce.
 *
 * Skipped entirely under reduced-motion, and the transform is written
 * straight to the node inside one rAF per scroll burst.
 */
export default function Parallax({
  children,
  speed = 0.15,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = true;

    // Only pay the cost while the element is actually on screen.
    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              visible = entries[0]?.isIntersecting ?? true;
            },
            { rootMargin: "20% 0px" },
          )
        : null;
    observer?.observe(el);

    const update = () => {
      frame = 0;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      // Distance of the element's centre from the viewport's centre.
      const fromCentre = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-fromCentre * speed).toFixed(2)}px, 0)`;
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
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
