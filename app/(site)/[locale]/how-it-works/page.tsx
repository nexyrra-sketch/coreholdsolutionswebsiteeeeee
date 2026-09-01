import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Section, Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { localePath } from "@/lib/i18n/path";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.howItWorks.h2,
    description: dict.howItWorks.intro,
    alternates: pageAlternates(params.locale, "/how-it-works"),
  };
}

export default function HowItWorksPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const h = dict.howItWorks;

  return (
    <>
      <Section tone="ink" className="pt-20">
        <Eyebrow tone="light">{h.eyebrow}</Eyebrow>
        <h1 className="font-display text-h1 max-w-3xl">{h.h2}</h1>
        <p className="mt-6 max-w-2xl text-lg text-paper-50/80">{h.intro}</p>
      </Section>

      <Section>
        <div className="grid gap-16 sm:gap-10 sm:grid-cols-3">
          {h.steps.map((step) => (
            <div key={step.n}>
              <span className="font-display text-5xl text-brass-500">{step.n}</span>
              <h2 className="mt-4 font-display text-h4">{step.title}</h2>
              <p className="mt-4 text-ink-700">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper" className="bg-paper-100">
        <Eyebrow>{h.capabilitiesHeading}</Eyebrow>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {h.capabilities.map((cap) => (
            <div key={cap.title} className="rounded-md border border-line bg-white p-6">
              <h3 className="font-display text-lg mb-2">{cap.title}</h3>
              <p className="text-small text-ink-700">{cap.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="text-center">
          <h2 className="font-display text-h2 max-w-2xl mx-auto">{h.cta}</h2>
          <div className="mt-8 flex justify-center gap-4">
            <LinkButton href={localePath(params.locale, "/contact")} size="large">
              {h.cta}
            </LinkButton>
            <LinkButton href={localePath(params.locale, "/calculator")} variant="secondary" size="large">
              {dict.hero.ctaPrimary}
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
