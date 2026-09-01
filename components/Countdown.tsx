"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type Remaining = { days: number; hours: number; minutes: number; seconds: number; passed: boolean };

function getRemaining(target: Date): Remaining {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    passed: false,
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function Track({
  label,
  sub,
  appoint,
  live,
  target,
  countdown,
}: {
  label: string;
  sub: string;
  appoint: string;
  live: string;
  target: Date;
  countdown: Dictionary["hero"]["countdown"];
}) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining(target));
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: Array<{ key: keyof Remaining; label: string }> = [
    { key: "days", label: countdown.days },
    { key: "hours", label: countdown.hours },
    { key: "minutes", label: countdown.minutes },
    { key: "seconds", label: countdown.seconds },
  ];

  return (
    <div className="flex-1 min-w-0 rounded-md border border-paper-50/15 bg-ink-900/60 p-6 sm:p-8">
      <p className="text-small font-medium text-paper-50/70">{sub}</p>
      <h3 className="mt-1 font-display text-xl text-paper-50">{label}</h3>

      <dl
        className="mt-6 grid grid-cols-4 gap-2 sm:gap-3"
        aria-hidden="true"
      >
        {units.map((u) => (
          <div key={u.key} className="rounded-sm bg-ink-950 border border-paper-50/10 py-3 text-center">
            <dd className="font-display text-2xl sm:text-3xl tabular-nums text-brass-200">
              {remaining ? pad(remaining[u.key] as number) : "—"}
            </dd>
            <dt className="mt-1 text-[0.65rem] uppercase tracking-widest text-paper-50/50">{u.label}</dt>
          </div>
        ))}
      </dl>

      {/* Accessible equivalent: announced once, not every second. */}
      <p className="sr-only">
        {remaining?.passed
          ? countdown.pastNote
          : `${label}: ${live}. ${remaining ? `${remaining.days} ${countdown.days}, ${remaining.hours} ${countdown.hours}, ${remaining.minutes} ${countdown.minutes}.` : ""} ${countdown.liveNote}.`}
      </p>

      <div className="mt-5 space-y-1 text-small text-paper-50/70">
        <p>{appoint}</p>
        <p>{live}</p>
      </div>
    </div>
  );
}

export default function Countdown({
  dict,
  largeTarget,
  smeTarget,
}: {
  dict: Dictionary;
  largeTarget: Date;
  smeTarget: Date;
}) {
  const c = dict.hero.countdown;
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-brass-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brass-400" />
        </span>
        <p className="text-small text-paper-50/70">{c.heading}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Track
          label={c.largeLabel}
          sub={c.largeSub}
          appoint={c.largeAppoint}
          live={c.largeLive}
          target={largeTarget}
          countdown={c}
        />
        <Track
          label={c.smeLabel}
          sub={c.smeSub}
          appoint={c.smeAppoint}
          live={c.smeLive}
          target={smeTarget}
          countdown={c}
        />
      </div>
    </div>
  );
}
