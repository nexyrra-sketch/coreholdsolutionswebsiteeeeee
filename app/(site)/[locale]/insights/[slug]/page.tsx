import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/i18n/path";
import { BRAND } from "@/lib/brand";
import { Section, Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import ArticleBody from "@/components/ArticleBody";
import { articleRoutes, getArticle, articleLocales, listArticles } from "@/lib/insights";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return articleRoutes().map(({ slug, locale }) => ({ locale, slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const article = getArticle(params.slug);
  const content = article?.content[params.locale];
  if (!article || !content) return {};

  const base = `https://${BRAND.domain}`;
  const path = `/insights/${article.slug}`;

  // Only advertise alternates for languages this article actually exists in,
  // so hreflang never points at a URL that 404s.
  const available = articleLocales(article.slug);
  const languages = Object.fromEntries(available.map((l) => [l, `${base}/${l}${path}`]));

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${base}/${params.locale}${path}`,
      languages: {
        ...languages,
        "x-default": `${base}/${available.includes("en") ? "en" : available[0]}${path}`,
      },
    },
    openGraph: {
      type: "article",
      title: content.title,
      description: content.description,
      url: `${base}/${params.locale}${path}`,
      publishedTime: article.published,
      modifiedTime: article.updated ?? article.published,
    },
  };
}

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlePage({ params }: { params: Params }) {
  const { locale, slug } = params;
  const article = getArticle(slug);
  const content = article?.content[locale];
  if (!article || !content) notFound();

  const dict = getDictionary(locale);
  const t = dict.insights;
  const base = `https://${BRAND.domain}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    description: content.description,
    datePublished: article.published,
    dateModified: article.updated ?? article.published,
    inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
    mainEntityOfPage: `${base}/${locale}/insights/${article.slug}`,
    author: { "@type": "Organization", name: BRAND.fullEn, url: base },
    publisher: {
      "@type": "Organization",
      name: BRAND.fullEn,
      url: base,
      logo: { "@type": "ImageObject", url: `${base}/og-image.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section tone="ink" className="pt-20 pb-14">
        <Eyebrow tone="light">{t.eyebrow}</Eyebrow>
        <h1 className="font-display text-h2 max-w-4xl">{content.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-paper-50/80">{content.intro}</p>
        <p className="mt-8 text-micro font-body font-semibold uppercase tracking-widest text-brass-200">
          {t.publishedLabel} {formatDate(article.published, locale)}
          {article.updated ? ` · ${t.updatedLabel} ${formatDate(article.updated, locale)}` : ""}
          {` · ${article.readingMinutes} ${t.readingTime}`}
        </p>
      </Section>

      <Section className="pt-14">
        <ArticleBody blocks={content.body} />

        {content.sources?.length ? (
          <div className="mx-auto max-w-2xl mt-14 border-t border-line pt-8">
            <h2 className="font-display text-lg text-ink-950 mb-4">{t.sourcesHeading}</h2>
            <ul className="space-y-3">
              {content.sources.map((source) => (
                <li key={source.url} className="text-small">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-700 underline underline-offset-4 decoration-line hover:text-brass-600 hover:decoration-brass-500 transition-colors"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {(() => {
          const related = listArticles(locale).filter((a) => a.slug !== article.slug);
          if (!related.length) return null;
          return (
            <div className="mx-auto max-w-2xl mt-14 border-t border-line pt-8">
              <h2 className="font-display text-lg text-ink-950 mb-4">{t.relatedHeading}</h2>
              <ul className="space-y-3">
                {related.map((a) => {
                  const c = a.content[locale];
                  if (!c) return null;
                  return (
                    <li key={a.slug}>
                      <Link
                        href={localePath(locale, `/insights/${a.slug}`)}
                        className="text-small font-medium text-ink-700 underline underline-offset-4 decoration-line hover:text-brass-600 hover:decoration-brass-500 transition-colors"
                      >
                        {c.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })()}

        <div className="mx-auto max-w-2xl mt-12">
          <Link
            href={localePath(locale, "/insights")}
            className="text-small font-medium text-ink-700 underline underline-offset-4 hover:text-ink-950 transition-colors"
          >
            ← {t.backToIndex}
          </Link>
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-h3">{t.ctaHeading}</h2>
          <p className="mt-5 text-lg text-paper-50/80">{t.ctaBody}</p>
          <div className="mt-8">
            <LinkButton href={localePath(locale, "/contact")}>{t.ctaButton}</LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
