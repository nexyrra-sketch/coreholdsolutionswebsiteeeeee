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
    title: dict.services.readiness.h1,
    description: dict.services.readiness.lede,
    alternates: pageAlternates(params.locale, "/readiness-assessment"),
  };
}

function List({ items, tone = "dark" }: { items: readonly string[]; tone?: "dark" | "light" }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-relaxed ${tone === "light" ? "text-paper-50/80" : "text-ink-700"}`}>
          <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ReadinessAssessmentPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const r = dict.services.readiness;

  return (
    <>
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{r.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-4xl font-display text-h1">{r.h1}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-50/80">{r.lede}</p>
          </Reveal>
          <Reveal variant="up" delay={280}>
            <dl className="mt-12 grid gap-6 border-t border-paper-50/12 pt-8 sm:grid-cols-3">
              {[
                [r.metaPrice, r.metaPriceNote],
                [r.metaDuration, r.metaFormat],
              ].map(([big, small]) => (
                <div key={big}>
                  <dt className="font-display text-2xl text-brass-200">{big}</dt>
                  <dd className="mt-1 text-small text-paper-50/55">{small}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal variant="up" delay={340}>
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href={localePath(locale, "/contact")}>{r.cta}</LinkButton>
              <LinkButton href={localePath(locale, "/how-it-works")} variant="secondary">
                {r.ctaSecondary}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-section-y">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="up">
            <div>
              <h2 className="font-display text-h3">{r.forWhomTitle}</h2>
              <List items={r.forWhom} />
            </div>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <div>
              <h2 className="font-display text-h3">{r.reviewTitle}</h2>
              <List items={r.review} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 py-section-y text-paper-50">
        <div className="container-content">
          <Reveal variant="up">
            <h2 className="max-w-3xl font-display text-h2">{r.answersTitle}</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {r.answers.map((q, i) => (
              <Reveal key={q} variant="up" delay={(i % 2) * 80}>
                <div className="h-full rounded-md border border-paper-50/12 bg-paper-50/[0.04] p-7">
                  <p className="leading-relaxed text-paper-50/85">&ldquo;{q}&rdquo;</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-100 py-section-y">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="up">
            <div>
              <h2 className="font-display text-h3">{r.deliverTitle}</h2>
              <List items={r.deliver} />
            </div>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-h3">{r.afterTitle}</h2>
                <p className="mt-6 leading-relaxed text-ink-700">{r.afterBody}</p>
              </div>
              <div className="rounded-md border border-brass-400 bg-brass-50 p-7">
                <h3 className="font-display text-h4">{r.keepTitle}</h3>
                <p className="mt-4 leading-relaxed text-ink-700">{r.keepBody}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 py-section-y text-paper-50">
        <div className="container-content text-center">
          <Reveal variant="up">
            <h2 className="mx-auto max-w-2xl font-display text-h2">{r.h1}</h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <LinkButton href={localePath(locale, "/contact")}>{r.cta}</LinkButton>
              <LinkButton href={localePath(locale, "/pricing")} variant="secondary">
                {dict.nav.pricing}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
