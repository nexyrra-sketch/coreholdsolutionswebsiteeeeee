import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { DEADLINES } from "@/lib/deadlines";
import { localePath } from "@/lib/i18n/path";
import { Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import ConcentricMotif from "@/components/ConcentricMotif";
import Countdown from "@/components/Countdown";
import Calculator from "@/components/Calculator";
import PinnedPath from "@/components/PinnedPath";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import CountUp from "@/components/motion/CountUp";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.hero.h1,
    description: dict.meta.ogDescription,
    alternates: pageAlternates(params.locale, ""),
  };
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="vault-vignette relative overflow-hidden bg-ink-950 pb-24 pt-20 text-paper-50 sm:pb-28 sm:pt-28">
        <Parallax speed={0.08} className="pointer-events-none absolute -end-40 -top-40 h-[42rem] w-[42rem]">
          <ConcentricMotif tone="line" rings={8} className="animate-dial h-full w-full opacity-[0.22]" />
        </Parallax>
        <Parallax speed={0.16} className="pointer-events-none absolute -start-24 top-1/2 h-72 w-72">
          <ConcentricMotif tone="brass" rings={4} className="animate-dial-reverse h-full w-full opacity-[0.12]" />
        </Parallax>

        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{dict.hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-4xl font-display text-h1 text-paper-50">{dict.hero.h1}</h1>
          </Reveal>

          <Reveal variant="up" delay={220}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-50/80">{dict.hero.subhead}</p>
          </Reveal>

          <Reveal variant="up" delay={320}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <LinkButton href={localePath(locale, "/calculator")} size="large">
                {dict.hero.ctaPrimary}
              </LinkButton>
              <LinkButton href="#engagement" variant="secondary" size="large">
                {dict.hero.ctaSecondary}
              </LinkButton>
            </div>
          </Reveal>

          <Reveal variant="fade" delay={420}>
            <p className="mt-8 max-w-xl text-small text-paper-50/45">{dict.hero.trustLine}</p>
          </Reveal>

          <Reveal variant="up" delay={480}>
            <div className="mt-16">
              <Countdown dict={dict} largeTarget={DEADLINES.large.live} smeTarget={DEADLINES.sme.live} />
            </div>
          </Reveal>

          {/* Scroll cue */}
          <div className="mt-16 hidden items-center gap-3 sm:flex" aria-hidden="true">
            <span className="relative block h-10 w-px overflow-hidden bg-paper-50/15">
              <span className="animate-cue absolute inset-x-0 top-0 block h-4 bg-brass-400" />
            </span>
            <span className="text-micro uppercase tracking-widest text-paper-50/35">{dict.hero.scrollCue}</span>
          </div>
        </div>
      </section>

      {/* ================= THE REGULATION, IN FIGURES ================= */}
      <section className="relative overflow-hidden bg-ink-950 pb-24 text-paper-50">
        <div className="container-content">
          <div className="rule-fade-light mb-16" />
          <Reveal variant="up">
            <Eyebrow tone="light">{dict.numbers.eyebrow}</Eyebrow>
            <h2 className="max-w-3xl font-display text-h3 text-paper-50/90">{dict.numbers.h2}</h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {dict.numbers.items.map((item, i) => (
              <Reveal key={item.label} variant="up" delay={i * 90}>
                <div className="border-t border-paper-50/15 pt-6">
                  <p className="font-display text-5xl text-brass-400">
                    {item.animate ? (
                      <CountUp to={item.value} prefix={item.prefix} suffix={item.suffix} />
                    ) : (
                      <>
                        {item.prefix}
                        {item.value}
                        {item.suffix}
                      </>
                    )}
                  </p>
                  <p className="mt-4 font-display text-lg text-paper-50">{item.label}</p>
                  <p className="mt-2 text-small leading-relaxed text-paper-50/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={200}>
            <p className="mt-12 max-w-3xl text-small text-paper-50/35">{dict.numbers.note}</p>
          </Reveal>
        </div>
      </section>

      {/* ================= THE PROBLEM ================= */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-3xl">
              <Eyebrow>{dict.problem.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{dict.problem.h2}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{dict.problem.intro}</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {dict.problem.points.map((point, i) => (
              <Reveal key={point.n} variant="up" delay={(i % 2) * 90}>
                <div className="border-t border-line pt-6">
                  <span className="font-display text-small text-brass-600">{point.n}</span>
                  <h3 className="mt-3 font-display text-xl">{point.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-700">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={120}>
            <p className="mt-16 max-w-2xl border-s-2 border-brass-500 ps-6 font-display text-h3 leading-tight">
              {dict.problem.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FOUR PILLARS ================= */}
      <section id="what-we-do" className="bg-paper-100 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-3xl">
              <Eyebrow>{dict.pillars.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{dict.pillars.h2}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{dict.pillars.intro}</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
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

          <Reveal variant="fade" delay={120}>
            <div className="mt-12">
              <LinkButton href={localePath(locale, "/how-it-works")} variant="ghost">
                {dict.pillars.cta}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PINNED ENGAGEMENT PATH ================= */}
      {/* No `overflow-hidden` on this section: an overflow-clipping ancestor
          silently breaks `position: sticky` on the pinned path inside it. */}
      <section id="engagement" className="vault-vignette relative bg-ink-950 py-section-y text-paper-50">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-3xl">
              <Eyebrow tone="light">{dict.path.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2 text-paper-50">{dict.path.h2}</h2>
              <p className="mt-6 text-lg leading-relaxed text-paper-50/70">{dict.path.intro}</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 lg:mt-0">
          <PinnedPath dict={dict} />
        </div>
      </section>

      {/* ================= INDEPENDENCE ================= */}
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

      {/* ================= CALCULATOR ================= */}
      <section id="calculator" className="bg-paper-100 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <div className="mb-10 max-w-2xl">
              <Eyebrow>{dict.calculator.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{dict.calculator.h2}</h2>
              <p className="mt-4 text-lg text-ink-700">{dict.calculator.intro}</p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={100}>
            <Calculator dict={dict} locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* ================= AUDIENCES ================= */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <Eyebrow>{dict.audiences.eyebrow}</Eyebrow>
            <h2 className="max-w-2xl font-display text-h2">{dict.audiences.h2}</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[dict.audiences.sme, dict.audiences.enterprise].map((group, i) => (
              <Reveal key={group.title} variant="up" delay={i * 100}>
                <div className="card-lift h-full rounded-md border border-line bg-white p-8 hover:border-brass-400">
                  <h3 className="mb-3 font-display text-xl">{group.title}</h3>
                  <p className="leading-relaxed text-ink-700">{group.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ASP PARTNERSHIP ================= */}
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -bottom-48 -start-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={6} className="animate-dial h-full w-full opacity-[0.14]" />
        </Parallax>
        <div className="container-content relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal variant="up">
              <div>
                <Eyebrow tone="light">{dict.partners.eyebrow}</Eyebrow>
                <h2 className="font-display text-h2 text-paper-50">{dict.partners.h2}</h2>
                <p className="mt-6 text-lg leading-relaxed text-paper-50/75">{dict.partners.body}</p>
                <div className="mt-9">
                  <LinkButton href={localePath(locale, "/contact")} size="large">
                    {dict.partners.cta}
                  </LinkButton>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:content-start">
              {dict.partners.points.map((point, i) => (
                <Reveal key={point.title} variant="up" delay={i * 80}>
                  <div className="h-full border-t border-paper-50/15 pt-5">
                    <h3 className="font-display text-lg text-paper-50">{point.title}</h3>
                    <p className="mt-2 text-small leading-relaxed text-paper-50/65">{point.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING TEASER ================= */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal variant="up">
              <div>
                <Eyebrow>{dict.pricing.eyebrow}</Eyebrow>
                <h2 className="font-display text-h2">{dict.pricing.h1}</h2>
                <p className="mt-4 max-w-lg text-lg text-ink-700">{dict.pricing.intro}</p>
                <div className="mt-8">
                  <LinkButton href={localePath(locale, "/pricing")}>{dict.nav.pricing}</LinkButton>
                </div>
              </div>
            </Reveal>
            <Reveal variant="scale" delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-lift rounded-md border border-line bg-white p-6 hover:border-brass-400">
                  <p className="mb-2 text-micro font-semibold uppercase tracking-widest text-brass-600">
                    {dict.pricing.getCompliant.title}
                  </p>
                  <p className="text-small text-ink-700">{dict.pricing.getCompliant.subtitle}</p>
                </div>
                <div className="card-lift rounded-md border border-line bg-white p-6 hover:border-brass-400">
                  <p className="mb-2 text-micro font-semibold uppercase tracking-widest text-brass-600">
                    {dict.pricing.stayCompliant.title}
                  </p>
                  <p className="text-small text-ink-700">{dict.pricing.stayCompliant.subtitle}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= TEAM TEASER ================= */}
      <section className="bg-paper-100 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <Eyebrow>{dict.about.eyebrow}</Eyebrow>
            <h2 className="max-w-3xl font-display text-h2">{dict.about.h1}</h2>
          </Reveal>
          <div className="mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
            <Reveal variant="up" delay={80}>
              <TeamCardMini
                photo="/assets/team/ghassan-adil.png"
                name={dict.about.team.ghassan.name}
                title={dict.about.team.ghassan.title}
              />
            </Reveal>
            <Reveal variant="up" delay={160}>
              <TeamCardMini
                photo="/assets/team/amro-idris.jpg"
                name={dict.about.team.amro.name}
                title={dict.about.team.amro.title}
              />
            </Reveal>
          </div>
          <Reveal variant="fade" delay={200}>
            <div className="mt-10">
              <LinkButton href={localePath(locale, "/about")} variant="ghost">
                {dict.nav.about}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ TEASER ================= */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <Eyebrow>{dict.glossary.eyebrow}</Eyebrow>
            <h2 className="max-w-2xl font-display text-h2">{dict.glossary.h1}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {dict.glossary.items.slice(0, 4).map((item, i) => (
              <Reveal key={item.q} variant="up" delay={(i % 2) * 80}>
                <div className="border-t border-line pt-4">
                  <h3 className="font-medium text-ink-950">{item.q}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" delay={160}>
            <div className="mt-10">
              <LinkButton href={localePath(locale, "/glossary")}>{dict.nav.glossary}</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y text-paper-50">
        <Parallax speed={0.12} className="pointer-events-none absolute -top-32 start-1/2 h-[30rem] w-[30rem] -translate-x-1/2">
          <ConcentricMotif tone="brass" rings={5} className="animate-dial-reverse h-full w-full opacity-[0.12]" />
        </Parallax>
        <div className="container-content relative text-center">
          <Reveal variant="up">
            <h2 className="mx-auto max-w-3xl font-display text-h2">{dict.hero.h1}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-paper-50/70">{dict.problem.closing}</p>
            <div className="mt-9 flex justify-center">
              <LinkButton href={localePath(locale, "/calculator")} size="large">
                {dict.hero.ctaPrimary}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TeamCardMini({ photo, name, title }: { photo: string; name: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line">
        <Image src={photo} alt={name} fill sizes="64px" className="object-cover" />
      </div>
      <div>
        <p className="font-display text-lg leading-tight">{name}</p>
        <p className="text-small text-ink-600">{title}</p>
      </div>
    </div>
  );
}
