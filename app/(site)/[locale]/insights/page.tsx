import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/i18n/path";
import { Section, Eyebrow } from "@/components/Section";
import { pageAlternates } from "@/lib/seo";
import { listArticles } from "@/lib/insights";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.insights.h1,
    description: dict.insights.intro,
    alternates: pageAlternates(params.locale, "/insights"),
  };
}

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsIndexPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const t = dict.insights;
  const articles = listArticles(locale);

  return (
    <>
      <Section tone="ink" className="pt-20 pb-14">
        <Eyebrow tone="light">{t.eyebrow}</Eyebrow>
        <h1 className="font-display text-h1 max-w-3xl">{t.h1}</h1>
        <p className="mt-6 max-w-2xl text-lg text-paper-50/80">{t.intro}</p>
      </Section>

      <Section className="pt-14">
        <div className="mx-auto max-w-3xl">
          {articles.length === 0 ? (
            <p className="text-ink-700">{t.empty}</p>
          ) : (
            <ul className="divide-y divide-line">
              {articles.map((article) => {
                const content = article.content[locale]!;
                return (
                  <li key={article.slug} className="py-8 first:pt-0">
                    <Link href={localePath(locale, `/insights/${article.slug}`)} className="group block">
                      <p className="text-micro font-body font-semibold uppercase tracking-widest text-brass-600">
                        {formatDate(article.published, locale)} · {article.readingMinutes} {t.readingTime}
                      </p>
                      <h2 className="mt-3 font-display text-h3 text-ink-950 group-hover:text-brass-600 transition-colors">
                        {content.title}
                      </h2>
                      <p className="mt-3 text-ink-700 leading-relaxed">{content.description}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Section>
    </>
  );
}
