import type { Locale } from "@/lib/i18n/config";
import type { Article, ArticleContent } from "./types";
import { uaeEInvoicingPenalties } from "./articles/uae-e-invoicing-penalties";
import { uaeChoosingAProvider } from "./articles/how-to-choose-an-accredited-service-provider";
import { uaeSmeGuide } from "./articles/uae-e-invoicing-guide-for-smes";
import { uaeProviderDirectory } from "./articles/uae-accredited-e-invoicing-service-providers";

/** Every article, in no particular order — sorting happens in the helpers. */
const ALL: Article[] = [uaeEInvoicingPenalties, uaeChoosingAProvider, uaeSmeGuide, uaeProviderDirectory];

/** Newest first. */
function byNewest(a: Article, b: Article) {
  return b.published.localeCompare(a.published);
}

/** Articles that have been written in this locale, newest first. */
export function listArticles(locale: Locale): Article[] {
  return ALL.filter((a) => a.content[locale]).sort(byNewest);
}

export function getArticle(slug: string): Article | undefined {
  return ALL.find((a) => a.slug === slug);
}

/** The content for one article in one locale, or undefined if not translated. */
export function getArticleContent(slug: string, locale: Locale): ArticleContent | undefined {
  return getArticle(slug)?.content[locale];
}

/**
 * Every (slug, locale) pair that actually resolves to a page. Used by
 * generateStaticParams and by the sitemap so neither ever emits a URL for a
 * translation that doesn't exist.
 */
export function articleRoutes(): { slug: string; locale: Locale }[] {
  const routes: { slug: string; locale: Locale }[] = [];
  for (const article of ALL) {
    for (const locale of Object.keys(article.content) as Locale[]) {
      if (article.content[locale]) routes.push({ slug: article.slug, locale });
    }
  }
  return routes;
}

/** The locales an article exists in — drives its hreflang alternates. */
export function articleLocales(slug: string): Locale[] {
  const article = getArticle(slug);
  if (!article) return [];
  return (Object.keys(article.content) as Locale[]).filter((l) => article.content[l]);
}

export type { Article, ArticleContent } from "./types";
