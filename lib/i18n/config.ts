export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { dir: "ltr" | "rtl"; label: string; htmlLang: string }> = {
  en: { dir: "ltr", label: "English", htmlLang: "en" },
  ar: { dir: "rtl", label: "العربية", htmlLang: "ar" },
};

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}
