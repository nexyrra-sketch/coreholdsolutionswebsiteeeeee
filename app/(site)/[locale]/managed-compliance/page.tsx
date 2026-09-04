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
    title: dict.services.managed.h1,
    description: dict.services.managed.lede,
    alternates: pageAlternates(params.locale, "/managed-compliance"),
  };
}

export default function ManagedCompliancePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const m = dict.services.managed;

  return (
    <>
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{m.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-4xl font-display text-h1">{m.h1}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-50/80">{m.lede}</p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href={localePath(locale, "/contact")}>{m.cta}</LinkButton>
              <LinkButton href={localePath(locale, "/pricing")} variant="secondary">
                {m.ctaSecondary}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <h2 className="max-w-2xl font-display text-h2">{m.includesTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {m.includes.map((it, i) => (
              <Reveal key={it.t} variant="up" delay={(i % 3) * 70}>
                <article className="card-lift h-full rounded-md border border-line bg-white p-7 hover:border-brass-400 sm:p-8">
                  <h3 className="font-display text-h4">{it.t}</h3>
                  <p className="mt-4 leading-relaxed text-ink-700">{it.b}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" delay={140}>
            <p className="mt-12 max-w-3xl border-s-2 border-brass-400 ps-6 leading-relaxed text-ink-600">
              {m.boundaryNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 py-section-y text-paper-50">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="up">
            <div>
              <h2 className="font-display text-h3">{m.forWhomTitle}</h2>
              <ul className="mt-6 space-y-3">
                {m.forWhom.map((f) => (
                  <li key={f} className="flex gap-3 leading-relaxed text-paper-50/80">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brass-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <div className="rounded-md border border-paper-50/15 bg-paper-50/[0.04] p-8">
              <h3 className="font-display text-h3">{m.liveTitle}</h3>
              <p className="mt-5 leading-relaxed text-paper-50/80">{m.liveBody}</p>
              <div className="mt-8">
                <LinkButton href={localePath(locale, "/contact")}>{m.cta}</LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
