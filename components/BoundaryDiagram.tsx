import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Eyebrow } from "@/components/Section";
import Reveal from "@/components/motion/Reveal";

/**
 * The Corehold / ASP boundary. This exists to answer the single objection that
 * kills deals: "why do I need you if I already have an accredited provider?"
 * The middle column is deliberately the tallest — that mass is the argument.
 */
export default function BoundaryDiagram({ locale, tone = "paper" }: { locale: Locale; tone?: "paper" | "ink" }) {
  const dict = getDictionary(locale);
  const b = dict.services.boundary;
  const light = tone === "ink";

  const cardBase = light
    ? "border-paper-50/15 bg-paper-50/[0.04]"
    : "border-line bg-white";
  const midCard = light
    ? "border-brass-400/50 bg-brass-400/[0.07]"
    : "border-brass-400 bg-brass-50";

  return (
    <section className={`py-section-y ${light ? "bg-ink-950 text-paper-50" : "bg-paper-100 text-ink-950"}`}>
      <div className="container-content">
        <Reveal variant="up">
          <div className="max-w-3xl">
            <Eyebrow tone={light ? "light" : "dark"}>{b.eyebrow}</Eyebrow>
            <h2 className="font-display text-h2">{b.h2}</h2>
            <p className={`mt-6 text-lg leading-relaxed ${light ? "text-paper-50/75" : "text-ink-700"}`}>{b.intro}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {b.layers.map((layer, i) => {
            const isMiddle = i === 1;
            return (
              <Reveal key={layer.label} variant="up" delay={i * 90}>
                <div
                  className={`h-full rounded-md border p-7 sm:p-8 ${isMiddle ? midCard : cardBase}`}
                >
                  <p
                    className={`text-micro font-semibold uppercase tracking-widest ${
                      isMiddle ? "text-brass-600" : light ? "text-paper-50/45" : "text-ink-500"
                    } ${isMiddle && light ? "text-brass-200" : ""}`}
                  >
                    {layer.label}
                  </p>
                  <h3 className="mt-3 font-display text-h4">{layer.title}</h3>
                  <ul className={`mt-6 space-y-3 border-t pt-6 ${light ? "border-paper-50/12" : "border-line"}`}>
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 text-small leading-relaxed ${light ? "text-paper-50/75" : "text-ink-700"}`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-1 w-1 shrink-0 rounded-full ${isMiddle ? "bg-brass-500" : light ? "bg-paper-50/35" : "bg-brass-400/40"}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" delay={120}>
          <p className={`mt-10 max-w-3xl text-small leading-relaxed ${light ? "text-paper-50/55" : "text-ink-600"}`}>
            {b.note}
          </p>
        </Reveal>

        <Reveal variant="up" delay={160}>
          <div className={`mt-10 max-w-3xl rounded-md border p-7 sm:p-8 ${light ? "border-paper-50/15 bg-paper-50/[0.04]" : "border-line bg-white"}`}>
            <p className="font-display text-h4">{b.answer.q}</p>
            <p className={`mt-4 leading-relaxed ${light ? "text-paper-50/80" : "text-ink-700"}`}>{b.answer.a}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
