type Props = {
  className?: string;
  rings?: number;
  tone?: "brass" | "line" | "paper";
};

const TONE_COLORS: Record<NonNullable<Props["tone"]>, string> = {
  brass: "#B9863F",
  line: "#D9D2C2",
  paper: "#F2EEE6",
};

/**
 * The recurring brand motif: nested, concentric arcs — never a literal vault
 * icon. Purely decorative (aria-hidden). Used as a quiet background element
 * behind the hero, section dividers, and card corners.
 */
export default function ConcentricMotif({ className, rings = 5, tone = "brass" }: Props) {
  const color = TONE_COLORS[tone];
  const items = Array.from({ length: rings });
  const base = 40;
  const step = 34;

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {items.map((_, i) => (
        <circle
          key={i}
          cx="200"
          cy="200"
          r={base + i * step}
          stroke={color}
          strokeOpacity={1 - i * (0.62 / rings)}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
