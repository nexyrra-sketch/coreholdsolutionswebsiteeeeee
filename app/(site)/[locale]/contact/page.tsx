import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Section, Eyebrow } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { BRAND } from "@/lib/brand";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.contact.h1,
    description: dict.contact.intro,
    alternates: pageAlternates(params.locale, "/contact"),
  };
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <Section tone="paper" className="pt-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <Eyebrow>{dict.contact.eyebrow}</Eyebrow>
          <h1 className="font-display text-h1">{dict.contact.h1}</h1>
          <p className="mt-6 max-w-md text-lg text-ink-700">{dict.contact.intro}</p>
          <a href={`mailto:${BRAND.email}`} className="mt-6 inline-block text-ink-900 underline underline-offset-4">
            {BRAND.email}
          </a>
          <a
            href={`https://wa.me/${BRAND.whatsappDigits}?text=${encodeURIComponent(dict.whatsapp.prefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-ink-900 underline underline-offset-4"
          >
            {dict.whatsapp.label} · {BRAND.whatsappNumber}
          </a>
        </div>
        <ContactForm dict={dict} locale={params.locale} />
      </div>
    </Section>
  );
}
