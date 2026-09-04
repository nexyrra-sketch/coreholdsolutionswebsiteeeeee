import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import ConcentricMotif from "@/components/ConcentricMotif";
import BoundaryDiagram from "@/components/BoundaryDiagram";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { localePath } from "@/lib/i18n/path";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.services.implementation.h1,
    description: dict.services.implementation.lede,
    alternates: pageAlternates(params.locale, "/implementation"),
  };
}

export default function ImplementationPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const im = dict.services.implementation;

  const objections = [
    { t: im.alreadyTitle, b: im.alreadyBody },
    { t: im.erpTitle, b: im.erpBody },
    { t: im.accountantTitle, b: im.accountantBody },
  ];

  return (
    <>
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{im.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-4xl font-display text-h1">{im.h1}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-50/80">{im.lede}</p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href={localePath(locale, "/contact")}>{im.cta}</LinkButton>
              <LinkButton href={localePath(locale, "/readiness-assessment")} variant="secondary">
                {im.ctaSecondary}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <h2 className="max-w-2xl font-display text-h2">{im.stagesTitle}</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
            {im.stages.map((st, i) => (
              <Reveal key={st.n} variant="up" delay={(i % 2) * 70}>
                <article className="h-full bg-white p-7 sm:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl text-brass-500">{st.n}</span>
                    <h3 className="font-display text-h4">{st.t}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-ink-700">{st.b}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BoundaryDiagram locale={locale} tone="ink" />

      <section className="bg-paper-100 py-section-y">
        <div className="container-content">
          <div className="grid gap-6 lg:grid-cols-3">
            {objections.map((o, i) => (
              <Reveal key={o.t} variant="up" delay={i * 80}>
                <div className="h-full rounded-md border border-line bg-white p-7 sm:p-8">
                  <h3 className="font-display text-h4">{o.t}</h3>
                  <p className="mt-4 leading-relaxed text-ink-700">{o.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" delay={200}>
            <div className="mt-14 flex flex-wrap gap-4">
              <LinkButton href={localePath(locale, "/contact")}>{im.cta}</LinkButton>
              <LinkButton href={localePath(locale, "/managed-compliance")} variant="ghost">
                {dict.services.managed.eyebrow}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
