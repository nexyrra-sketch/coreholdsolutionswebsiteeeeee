import type { Dictionary } from "@/lib/i18n/get-dictionary";
import Reveal from "@/components/motion/Reveal";

/**
 * The five-corner model, drawn as a process line.
 *
 * This is the single most valuable thing on the page for a visitor who
 * arrived not knowing what any of this means: it shows what happens to their
 * invoice before it asks them to care about Peppol or PINT-AE. It also does
 * the positioning work that no paragraph can — by marking, on the official
 * model itself, exactly which corners CHS is accountable for.
 *
 * The connecting rule is drawn behind the numbered badges and only above lg,
 * where the four nodes sit in one row. Below that the nodes stack and the
 * rule would be meaningless, so it's simply not rendered. Everything uses
 * logical properties, so the sequence runs right-to-left in Arabic without
 * a second layout.
 */
export default function FiveCorner({ dict }: { dict: Dictionary }) {
  const e = dict.explainer;

  return (
    <div>
      {/* ---- Corners 1–4 ---- */}
      <div className="relative">
        {/* The rule the badges sit on. Insets stop it protruding past the
            first and last badge centres. */}
        <div
          aria-hidden="true"
          className="absolute top-5 hidden h-px bg-gradient-to-r from-transparent via-brass-500/40 to-transparent lg:block"
          style={{ insetInlineStart: "12%", insetInlineEnd: "12%" }}
        />

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {e.nodes.map((node, i) => (
            <Reveal key={node.n} variant="up" delay={i * 110}>
              <li>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass-500/60 bg-ink-950 font-display text-lg text-brass-300">
                  {node.n}
                </span>
                <h3 className="mt-5 font-display text-xl text-paper-50">{node.title}</h3>
                <p className="mt-3 text-small leading-relaxed text-paper-50/65">{node.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* ---- Corner 5 + where CHS works ---- */}
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal variant="up" delay={80}>
          <div className="h-full rounded-md border border-paper-50/15 p-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-50/25 font-display text-lg text-paper-50/70">
              {e.fifth.n}
            </span>
            <h3 className="mt-5 font-display text-xl text-paper-50">{e.fifth.title}</h3>
            <p className="mt-3 text-small leading-relaxed text-paper-50/65">{e.fifth.body}</p>
          </div>
        </Reveal>

        {/* The positioning claim, made against the official model rather than
            asserted in prose. */}
        <Reveal variant="up" delay={180}>
          <div className="h-full rounded-md border border-brass-500/50 bg-brass-500/[0.07] p-8">
            <p className="text-micro font-semibold uppercase tracking-widest text-brass-200">
              {e.scopeLabel}
            </p>
            <p className="mt-5 leading-relaxed text-paper-50/85">{e.scopeBody}</p>
          </div>
        </Reveal>
      </div>

      <Reveal variant="fade" delay={120}>
        <p className="mt-12 max-w-3xl border-s-2 border-paper-50/20 ps-6 text-small leading-relaxed text-paper-50/50">
          {e.jargonNote}
        </p>
      </Reveal>
    </div>
  );
}
