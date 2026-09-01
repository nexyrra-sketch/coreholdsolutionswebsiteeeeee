import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Section, Eyebrow } from "@/components/Section";
import Calculator from "@/components/Calculator";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.calculator.h2,
    description: dict.calculator.intro,
    alternates: pageAlternates(params.locale, "/calculator"),
  };
}

export default function CalculatorPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section tone="paper" className="pt-16">
      <div className="max-w-2xl mb-10">
        <Eyebrow>{dict.calculator.eyebrow}</Eyebrow>
        <h1 className="font-display text-h1">{dict.calculator.h2}</h1>
        <p className="mt-4 text-lg text-ink-700">{dict.calculator.intro}</p>
      </div>
      <Calculator dict={dict} locale={params.locale} />
    </Section>
  );
}
