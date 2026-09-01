import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Section, Eyebrow } from "@/components/Section";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.glossary.h1,
    description: dict.glossary.intro,
    alternates: pageAlternates(params.locale, "/glossary"),
  };
}

export default function GlossaryPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const g = dict.glossary;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Section tone="ink" className="pt-20 pb-14">
        <Eyebrow tone="light">{g.eyebrow}</Eyebrow>
        <h1 className="font-display text-h1 max-w-3xl">{g.h1}</h1>
        <p className="mt-6 max-w-2xl text-lg text-paper-50/80">{g.intro}</p>
      </Section>

      <Section className="pt-14">
        <div className="mx-auto max-w-3xl divide-y divide-line">
          {g.items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink-950 marker:content-none">
                {item.q}
                <span aria-hidden="true" className="shrink-0 text-brass-500 text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink-700">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
