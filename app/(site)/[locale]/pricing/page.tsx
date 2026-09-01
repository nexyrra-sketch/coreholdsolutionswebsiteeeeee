import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Section, Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import { localePath } from "@/lib/i18n/path";
import { GET_COMPLIANT_PRICING, STAY_COMPLIANT_PRICING, toFils } from "@/lib/pricing";
import CheckoutButton from "@/components/CheckoutButton";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.pricing.h1,
    description: dict.pricing.intro,
    alternates: pageAlternates(params.locale, "/pricing"),
  };
}

export default function PricingPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const p = dict.pricing;

  return (
    <>
      <Section tone="ink" className="pt-20">
        <Eyebrow tone="light">{p.eyebrow}</Eyebrow>
        <h1 className="font-display text-h1 max-w-3xl">{p.h1}</h1>
        <p className="mt-6 max-w-2xl text-lg text-paper-50/80">{p.intro}</p>
        <p className="mt-4 text-small text-brass-200">{p.placeholderNotice}</p>
      </Section>

      <Section>
        <h2 className="font-display text-h3 mb-2">{p.getCompliant.title}</h2>
        <p className="text-ink-700 mb-10">{p.getCompliant.subtitle}</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {p.getCompliant.tiers.map((tier, i) => {
            const priceData = GET_COMPLIANT_PRICING[i];
            return (
              <PricingCard key={tier.name} tier={tier}>
                {priceData?.amountAed && priceData.mode ? (
                  <CheckoutButton
                    tierName={tier.name}
                    amountFils={toFils(priceData.amountAed)}
                    mode={priceData.mode}
                    locale={locale}
                    label={dict.howItWorks.cta}
                    notConnectedLabel="Online checkout isn't connected yet."
                  />
                ) : (
                  <LinkButton href={localePath(locale, "/contact")} className="w-full">
                    {p.enterpriseCta.cta}
                  </LinkButton>
                )}
              </PricingCard>
            );
          })}
        </div>
      </Section>

      <Section tone="paper" className="bg-paper-100">
        <h2 className="font-display text-h3 mb-2">{p.stayCompliant.title}</h2>
        <p className="text-ink-700 mb-10">{p.stayCompliant.subtitle}</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {p.stayCompliant.tiers.map((tier, i) => {
            const priceData = STAY_COMPLIANT_PRICING[i];
            return (
              <PricingCard key={tier.name} tier={tier}>
                {priceData?.amountAed && priceData.mode ? (
                  <CheckoutButton
                    tierName={tier.name}
                    amountFils={toFils(priceData.amountAed)}
                    mode={priceData.mode}
                    locale={locale}
                    label={dict.howItWorks.cta}
                    notConnectedLabel="Online checkout isn't connected yet."
                  />
                ) : (
                  <LinkButton href={localePath(locale, "/contact")} className="w-full">
                    {p.enterpriseCta.cta}
                  </LinkButton>
                )}
              </PricingCard>
            );
          })}
        </div>
      </Section>

      <Section tone="ink">
        <div className="rounded-md border border-paper-50/15 p-10 text-center">
          <h2 className="font-display text-h3">{p.enterpriseCta.title}</h2>
          <p className="mt-3 max-w-xl mx-auto text-paper-50/75">{p.enterpriseCta.body}</p>
          <div className="mt-6 flex justify-center">
            <LinkButton href={localePath(locale, "/contact")}>{p.enterpriseCta.cta}</LinkButton>
          </div>
        </div>
        <p className="mt-8 text-center">
          <LinkButton href={localePath(locale, "/glossary")} variant="ghost">
            {p.faqLink}
          </LinkButton>
        </p>
      </Section>
    </>
  );
}

function PricingCard({
  tier,
  children,
}: {
  tier: { name: string; forWhom: string; price: string; priceNote: string; features: readonly string[] | string[] };
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-md border border-line bg-white p-8">
      <h3 className="font-display text-xl">{tier.name}</h3>
      <p className="mt-1 text-small text-ink-600">{tier.forWhom}</p>
      <div className="mt-6">
        <span className="font-display text-3xl">{tier.price}</span>
        <span className="ms-2 text-small text-ink-600">{tier.priceNote}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2 text-small text-ink-700">
            <span aria-hidden="true" className="text-brass-500">
              —
            </span>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">{children}</div>
    </div>
  );
}
