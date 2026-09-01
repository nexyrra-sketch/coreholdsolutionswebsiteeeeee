import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import ConcentricMotif from "@/components/ConcentricMotif";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { localePath } from "@/lib/i18n/path";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.pillars.h2,
    description: dict.pillars.intro,
    alternates: pageAlternates(params.locale, "/how-it-works"),
  };
}

export default function HowItWorksPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{dict.pillars.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-3xl font-display text-h1">{dict.pillars.h2}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-50/80">{dict.pillars.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* ---- The short version ---- */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-2xl">
              <Eyebrow>{dict.howItWorks.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{dict.howItWorks.h2}</h2>
              <p className="mt-4 text-lg text-ink-700">{dict.howItWorks.intro}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {dict.howItWorks.steps.map((step, i) => (
              <Reveal key={step.n} variant="up" delay={i * 90}>
                <div className="border-t border-line pt-6">
                  <span className="font-display text-4xl text-brass-500">{step.n}</span>
                  <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                  <p className="mt-3 text-small leading-relaxed text-ink-700">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The four disciplines ---- */}
      <section className="bg-paper-100 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <h2 className="max-w-3xl font-display text-h2">{dict.pillars.h2}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {dict.pillars.items.map((pillar, i) => (
              <Reveal key={pillar.n} variant="up" delay={(i % 2) * 90}>
                <article className="card-lift h-full rounded-md border border-line bg-white p-8 hover:border-brass-400 sm:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl text-brass-500">{pillar.n}</span>
                    <h3 className="font-display text-h4">{pillar.title}</h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-ink-900">{pillar.summary}</p>
                  <p className="mt-4 text-small leading-relaxed text-ink-600">{pillar.body}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-6">
                    {pillar.detail.map((d) => (
                      <li key={d} className="flex gap-3 text-small text-ink-700">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Engagement stages ---- */}
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y text-paper-50">
        <div className="container-content relative">
          <Reveal variant="up">
            <div className="max-w-2xl">
              <Eyebrow tone="light">{dict.path.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{dict.path.h2}</h2>
              <p className="mt-6 text-lg leading-relaxed text-paper-50/75">{dict.path.intro}</p>
            </div>
          </Reveal>

          <ol className="mt-16 space-y-px">
            {dict.path.stages.map((stage, i) => (
              <Reveal key={stage.n} variant="up" delay={i * 70}>
                <li className="grid gap-6 border-t border-paper-50/15 py-10 md:grid-cols-[7rem_1fr] md:gap-10">
                  <div>
                    <span className="font-display text-4xl text-brass-400">{stage.n}</span>
                    <p className="mt-2 text-micro font-semibold uppercase tracking-widest text-brass-200">
                      {stage.label}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-h4 text-paper-50">{stage.title}</h3>
                    <p className="mt-4 max-w-2xl leading-relaxed text-paper-50/70">{stage.body}</p>
                    <p className="mt-5 inline-flex border-s-2 border-brass-500 ps-4 text-small text-brass-200">
                      {stage.outcome}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Independence ---- */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
            <Reveal variant="up">
              <div>
                <Eyebrow>{dict.independence.eyebrow}</Eyebrow>
                <h2 className="font-display text-h2">{dict.independence.h2}</h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-700">{dict.independence.body}</p>
              </div>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <div className="rounded-md border border-line bg-paper-100 p-8 sm:p-10">
                <h3 className="text-micro font-semibold uppercase tracking-widest text-brass-600">
                  {dict.independence.factsHeading}
                </h3>
                <ul className="mt-6 space-y-3">
                  {dict.independence.facts.map((fact) => (
                    <li key={fact} className="flex gap-3 border-b border-line/70 pb-3 text-ink-800 last:border-0">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                      {fact}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-small leading-relaxed text-ink-600">{dict.independence.factsNote}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-paper-100 py-section-y">
        <div className="container-content text-center">
          <Reveal variant="up">
            <h2 className="mx-auto max-w-2xl font-display text-h2">{dict.howItWorks.cta}</h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <LinkButton href={localePath(locale, "/contact")} size="large">
                {dict.howItWorks.cta}
              </LinkButton>
              <LinkButton href={localePath(locale, "/calculator")} variant="ghost" size="large">
                {dict.hero.ctaPrimary}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
