import { BRAND } from "@/lib/brand";

/**
 * The CHS mark: a vault dial rendered as concentric rings around a solid core.
 *
 * The outer ring carries a deliberate gap — a dial that has been turned and
 * opened, not a sealed circle. That gap is the whole idea of the company in
 * one shape: the vault is shut to everyone except the business that owns it,
 * and we're the ones who know the combination. The solid centre is the
 * "core" being held.
 *
 * Drawn on a 48×48 grid so it stays crisp at favicon sizes.
 */
export function LogoMark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light" | "mono";
}) {
  // Ring colour vs. core colour. The core is always brass — it's the one
  // element that never recedes.
  const ring = tone === "light" ? "#FAF8F4" : tone === "mono" ? "currentColor" : "#12141A";
  const core = tone === "mono" ? "currentColor" : "#B9863F";
  const ringDim = tone === "light" ? 0.45 : tone === "mono" ? 0.45 : 0.35;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Outer ring, opened at the top-right — the dial's access point.
          Circumference at r=21 is ~131.95; we draw 112 and leave ~20 open. */}
      <circle
        cx="24"
        cy="24"
        r="21"
        stroke={ring}
        strokeOpacity={ringDim}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="112 20"
        transform="rotate(-58 24 24)"
      />
      {/* Middle ring — closed, the structural layer. */}
      <circle cx="24" cy="24" r="14.5" stroke={ring} strokeOpacity={ringDim + 0.3} strokeWidth="1.5" />
      {/* Inner ring — brass, the layer that signals value. */}
      <circle cx="24" cy="24" r="8.5" stroke={core} strokeOpacity="0.9" strokeWidth="1.5" />
      {/* The held core. */}
      <circle cx="24" cy="24" r="3.25" fill={core} />
      {/* Dial index mark at the opening — a precision instrument, not a logo blob. */}
      <path
        d="M24 0.5V5"
        stroke={core}
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="rotate(35 24 24)"
      />
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
