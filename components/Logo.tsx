import { BRAND } from "@/lib/brand";

/**
 * The CHS mark: two brackets holding a solid core.
 *
 * The brackets read two ways at once, and both are the business. As focus
 * marks they're the language of precision instruments — something being
 * measured and aligned rather than guessed at. As a pair of hands around a
 * centre, they're literally the name: the core, held. The core itself is
 * always solid and always brass, because the one thing a client keeps
 * through all of this is their own business.
 *
 * Drawn on a 48×48 grid, 180°-rotationally symmetric, so it stays balanced
 * at any size and survives being scaled down to a 32px favicon.
 */
export function LogoMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light" | "mono";
}) {
  // A single-colour mark, tuned per background: the deeper brass clears
  // WCAG contrast on the light header, the lighter one glows on ink.
  const mark = tone === "light" ? "#C99A4E" : tone === "mono" ? "currentColor" : "#9C6E30";

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" focusable="false">
      {/* Upper-left bracket */}
      <path d="M8 8 H23 V11.4 H11.4 V23 H8 Z" fill={mark} />
      {/* The held core */}
      <rect x="18.6" y="18.6" width="10.8" height="10.8" fill={mark} />
      {/* Lower-right bracket — the same shape, turned 180° */}
      <path d="M40 40 H25 V36.6 H36.6 V25 H40 Z" fill={mark} />
    </svg>
  );
}

/**
 * Full lockup: mark + wordmark. "Corehold" carries the weight, "Solutions"
 * sits back in brass — so the eye lands on the name, not the suffix.
 */
export default function Logo({
  className = "",
  tone = "dark",
  showWordmark = true,
  hideWordmarkOnMobile = false,
  locale = "en",
}: {
  className?: string;
  tone?: "dark" | "light";
  showWordmark?: boolean;
  /** The header is tight on small screens; the footer has room. */
  hideWordmarkOnMobile?: boolean;
  locale?: "en" | "ar";
}) {
  const nameColor = tone === "light" ? "text-paper-50" : "text-ink-950";
  const suffixColor = tone === "light" ? "text-brass-200" : "text-brass-600";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark tone={tone} className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className={`${hideWordmarkOnMobile ? "hidden sm:flex" : "flex"} flex-col leading-none`}>
          {locale === "ar" ? (
            <span className={`font-display-ar text-lg leading-tight ${nameColor}`}>{BRAND.fullAr}</span>
          ) : (
            <span className="font-display text-lg leading-tight tracking-tight">
              <span className={nameColor}>Corehold</span>
              <span className={suffixColor}>Solutions</span>
            </span>
          )}
        </span>
      )}
    </span>
  );
}
