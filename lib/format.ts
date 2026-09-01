import type { Locale } from "./i18n/config";

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-u-nu-latn" : "en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
