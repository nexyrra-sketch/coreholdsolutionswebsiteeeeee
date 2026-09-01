"use client";

import { useEffect, useRef } from "react";

/**
 * A brass hairline across the top of the viewport tracking read progress.
 *
 * Written against the DOM directly rather than through React state: this
 * updates on every scroll frame, and re-rendering a component 60 times a
 * second to move one line would be wasteful. The scroll listener is passive
 * and coalesced into a single animation frame.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      bar.style.transform = `scaleX(${progress})`;
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
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent"
    >
      <div
        ref={barRef}
        className="progress-origin h-full w-full bg-gradient-to-r from-brass-600 via-brass-400 to-brass-200"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
