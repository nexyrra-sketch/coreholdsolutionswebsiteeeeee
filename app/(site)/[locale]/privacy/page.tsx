import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Section, Eyebrow } from "@/components/Section";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.privacy.h1,
    robots: { index: true, follow: true },
    alternates: pageAlternates(params.locale, "/privacy"),
  };
}

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const p = dict.privacy;

  return (
    <Section className="pt-20">
      <div className="container-prose">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="font-display text-h1 mb-2">{p.h1}</h1>
        <p className="text-small text-ink-600 mb-10">{p.updated}</p>
        <div className="space-y-5 text-ink-800">
          {p.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
