import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { BRAND } from "@/lib/brand";

const routes = ["", "/calculator", "/how-it-works", "/pricing", "/about", "/glossary", "/contact", "/privacy", "/terms"];

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

  return entries;
}
