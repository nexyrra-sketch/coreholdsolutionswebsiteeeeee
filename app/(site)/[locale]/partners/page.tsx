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
    title: dict.partnersPage.h1,
    description: dict.partnersPage.intro,
    alternates: pageAlternates(params.locale, "/partners"),
  };
}

function Points({ points, light = false }: { points: readonly { t: string; b: string }[]; light?: boolean }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      {points.map((p) => (
        <div key={p.t} className={`border-s-2 ps-5 ${light ? "border-brass-400/50" : "border-line"}`}>
          <h3 className="font-body font-semibold">{p.t}</h3>
          <p className={`mt-2 text-small leading-relaxed ${light ? "text-paper-50/70" : "text-ink-600"}`}>{p.b}</p>
        </div>
      ))}
    </div>
  );
}

export default function PartnersPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const p = dict.partnersPage;

  return (
    <>
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{p.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-4xl font-display text-h1">{p.h1}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-50/80">{p.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Accounting firms — the highest-leverage channel, so it leads. */}
      <section id="accounting" className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-3xl">
              <Eyebrow>{p.accounting.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{p.accounting.h2}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{p.accounting.body}</p>
            </div>
          </Reveal>
          <Points points={p.accounting.points} />
          <Reveal variant="up" delay={140}>
            <div className="mt-10">
              <LinkButton href={localePath(locale, "/contact")}>{p.accounting.cta}</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="providers" className="bg-ink-950 py-section-y text-paper-50">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-3xl">
              <Eyebrow tone="light">{p.asp.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{p.asp.h2}</h2>
              <p className="mt-6 text-lg leading-relaxed text-paper-50/75">{p.asp.body}</p>
            </div>
          </Reveal>
          <Points points={p.asp.points} light />
          <Reveal variant="fade" delay={140}>
            <p className="mt-10 max-w-3xl border-s-2 border-brass-400 ps-6 text-small leading-relaxed text-paper-50/60">
              {p.asp.boundary}
            </p>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <div className="mt-10">
              <LinkButton href={localePath(locale, "/contact")}>{p.asp.cta}</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="technology" className="bg-paper-100 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-3xl">
              <Eyebrow>{p.tech.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{p.tech.h2}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{p.tech.body}</p>
            </div>
          </Reveal>
          <Points points={p.tech.points} />
          <Reveal variant="up" delay={140}>
            <div className="mt-10">
              <LinkButton href={localePath(locale, "/contact")} variant="ghost">
                {p.tech.cta}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-section-y">
        <div className="container-content max-w-3xl">
          <Reveal variant="up">
            <h2 className="font-display text-h2">{p.closing.h2}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{p.closing.body}</p>
            <div className="mt-10">
              <LinkButton href={localePath(locale, "/contact")}>{p.closing.cta}</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
