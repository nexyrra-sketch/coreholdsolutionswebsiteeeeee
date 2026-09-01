import { locales, type Locale } from "./i18n/config";
import { BRAND } from "./brand";

/**
 * Per-page canonical + hreflang alternates. `path` is the route without its
 * locale prefix — "" for the home page, "/pricing" for the pricing page,
 * and so on. Every page's generateMetadata should call this so the
 * alternates point at that specific page in each language, not always at
 * the homepage.
 */
export function pageAlternates(locale: Locale, path: string) {
  const base = `https://${BRAND.domain}`;
  const clean = path === "/" ? "" : path;
  return {
    canonical: `${base}/${locale}${clean}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `${base}/${l}${clean}`])),
      "x-default": `${base}/en${clean}`,
    },
  };
}
