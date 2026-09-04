import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { BRAND } from "@/lib/brand";
import { articleRoutes, getArticle, articleLocales } from "@/lib/insights";
import { segmentRoutes, segmentLocales, basePath } from "@/lib/segments";

const routes = [
  "",
  "/calculator",
  "/how-it-works",
  "/readiness-assessment",
  "/implementation",
  "/managed-compliance",
  "/industries",
  "/erp",
  "/pricing",
  "/about",
  "/glossary",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${BRAND.domain}`;
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${route}`])),
        },
      });
    }
  }

  // Articles. Only the (slug, locale) pairs that actually exist are emitted,
  // and each one's alternates list only the languages it was written in.
  for (const { slug, locale } of articleRoutes()) {
    const article = getArticle(slug)!;
    const available = articleLocales(slug);
    entries.push({
      url: `${base}/${locale}/insights/${slug}`,
      lastModified: new Date(article.updated ?? article.published),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(available.map((l) => [l, `${base}/${l}/insights/${slug}`])),
      },
    });
  }

  // Industry and ERP landing pages, same locale-partial discipline as articles.
  for (const { kind, slug, locale } of segmentRoutes()) {
    const available = segmentLocales(kind, slug);
    entries.push({
      url: `${base}/${locale}${basePath[kind]}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: Object.fromEntries(available.map((l) => [l, `${base}/${l}${basePath[kind]}/${slug}`])),
      },
    });
  }

  return entries;
}
