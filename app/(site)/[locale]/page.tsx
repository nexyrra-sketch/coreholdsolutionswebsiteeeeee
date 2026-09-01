import type { Metadata } from "next";
import Link from "next/link";
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
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 text-paper-50 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <ConcentricMotif
          tone="line"
          rings={7}
          className="pointer-events-none absolute -top-32 -end-32 h-[34rem] w-[34rem] opacity-25 sm:opacity-30"
        />
        <ConcentricMotif
          tone="brass"
          rings={4}
          className="pointer-events-none absolute top-1/2 -start-20 h-64 w-64 opacity-10"
        />
        <div className="container-content relative">
          <Eyebrow tone="light">{dict.hero.eyebrow}</Eyebrow>
          <h1 className="max-w-4xl font-display text-h1 text-paper-50">{dict.hero.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-paper-50/80">{dict.hero.subhead}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <LinkButton href={localePath(locale, "/calculator")} size="large">
              {dict.hero.ctaPrimary}
            </LinkButton>
            <LinkButton href="#how-it-works" variant="secondary" size="large">
              {dict.hero.ctaSecondary}
            </LinkButton>
          </div>

          <div className="mt-14">
            <Countdown dict={dict} largeTarget={DEADLINES.large.live} smeTarget={DEADLINES.sme.live} />
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="bg-paper-100 py-section-y">
        <div className="container-content">
          <div className="max-w-2xl mb-10">
            <Eyebrow>{dict.calculator.eyebrow}</Eyebrow>
            <h2 className="font-display text-h2">{dict.calculator.h2}</h2>
            <p className="mt-4 text-lg text-ink-700">{dict.calculator.intro}</p>
          </div>
          <Calculator dict={dict} locale={locale} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-paper-50 py-section-y">
        <div className="container-content">
          <div className="max-w-2xl mb-14">
            <Eyebrow>{dict.howItWorks.eyebrow}</Eyebrow>
            <h2 className="font-display text-h2">{dict.howItWorks.h2}</h2>
            <p className="mt-4 text-lg text-ink-700">{dict.howItWorks.intro}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {dict.howItWorks.steps.map((step) => (
              <div key={step.n} className="relative">
                <span className="font-display text-4xl text-brass-500">{step.n}</span>
                <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                <p className="mt-3 text-small text-ink-700">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-start">
            <LinkButton href={localePath(locale, "/how-it-works")} variant="ghost">
              {dict.howItWorks.cta}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="bg-ink-950 text-paper-50 py-section-y relative overflow-hidden">
        <ConcentricMotif
          tone="line"
          rings={6}
          className="pointer-events-none absolute -bottom-40 -start-20 h-96 w-96 opacity-15"
        />
        <div className="container-content relative">
          <Eyebrow tone="light">{dict.audiences.eyebrow}</Eyebrow>
          <h2 className="font-display text-h2 max-w-2xl">{dict.audiences.h2}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-paper-50/15 p-8">
              <h3 className="font-display text-xl mb-3">{dict.audiences.sme.title}</h3>
              <p className="text-small text-paper-50/75">{dict.audiences.sme.body}</p>
            </div>
            <div className="rounded-md border border-paper-50/15 p-8">
              <h3 className="font-display text-xl mb-3">{dict.audiences.enterprise.title}</h3>
              <p className="text-small text-paper-50/75">{dict.audiences.enterprise.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>{dict.pricing.eyebrow}</Eyebrow>
              <h2 className="font-display text-h2">{dict.pricing.h1}</h2>
              <p className="mt-4 text-lg text-ink-700 max-w-lg">{dict.pricing.intro}</p>
              <div className="mt-8">
                <LinkButton href={localePath(locale, "/pricing")}>{dict.nav.pricing}</LinkButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md border border-line bg-white p-6">
                <p className="text-micro font-semibold uppercase tracking-widest text-brass-600 mb-2">
                  {dict.pricing.getCompliant.title}
                </p>
                <p className="text-small text-ink-700">{dict.pricing.getCompliant.subtitle}</p>
              </div>
              <div className="rounded-md border border-line bg-white p-6">
                <p className="text-micro font-semibold uppercase tracking-widest text-brass-600 mb-2">
                  {dict.pricing.stayCompliant.title}
                </p>
                <p className="text-small text-ink-700">{dict.pricing.stayCompliant.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST TEASER */}
      <section className="bg-paper-100 py-section-y">
        <div className="container-content">
          <Eyebrow>{dict.about.eyebrow}</Eyebrow>
          <h2 className="font-display text-h2 max-w-2xl">{dict.about.h1}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-3xl">
            <TeamCardMini
              photo="/assets/team/ghassan-adil.png"
              name={dict.about.team.ghassan.name}
              title={dict.about.team.ghassan.title}
            />
            <TeamCardMini
              photo="/assets/team/amro-idris.jpg"
              name={dict.about.team.amro.name}
              title={dict.about.team.amro.title}
            />
          </div>
          <div className="mt-10">
            <LinkButton href={localePath(locale, "/about")} variant="ghost">
              {dict.nav.about}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Eyebrow>{dict.glossary.eyebrow}</Eyebrow>
          <h2 className="font-display text-h2 max-w-2xl">{dict.glossary.h1}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {dict.glossary.items.slice(0, 4).map((item) => (
              <div key={item.q} className="border-t border-line pt-4">
                <h3 className="font-medium text-ink-950">{item.q}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <LinkButton href={localePath(locale, "/glossary")}>{dict.nav.glossary}</LinkButton>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink-950 text-paper-50 py-section-y relative overflow-hidden">
        <ConcentricMotif
          tone="brass"
          rings={5}
          className="pointer-events-none absolute -top-24 start-1/2 -translate-x-1/2 h-96 w-96 opacity-10"
        />
        <div className="container-content relative text-center">
          <h2 className="font-display text-h2 max-w-2xl mx-auto">{dict.hero.h1}</h2>
          <div className="mt-8 flex justify-center">
            <LinkButton href={localePath(locale, "/calculator")} size="large">
              {dict.hero.ctaPrimary}
            </LinkButton>
          </div>
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
