import type { Locale } from "@/lib/i18n/config";

/**
 * Article body blocks.
 *
 * Deliberately a small, typed set rather than raw markdown: it keeps article
 * content in the same shape as the rest of the site's content (typed TS
 * modules, checked at build time), avoids adding a markdown runtime, and
 * means a malformed article fails `tsc` instead of rendering broken HTML in
 * production.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; note?: string }
  | { type: "callout"; title?: string; text: string };

export type Source = { label: string; url: string };

export type ArticleContent = {
  /** Used as <h1> and as the <title>. */
  title: string;
  /** Meta description and the summary shown on the index page. */
  description: string;
  /** Standfirst paragraph under the h1. */
  intro: string;
  body: Block[];
  /** Primary sources. Shown at the foot of the article. */
  sources?: Source[];
};

export type Article = {
  slug: string;
  /** ISO date. Drives ordering on the index and the Article JSON-LD. */
  published: string;
  /** ISO date, when materially revised after publication. */
  updated?: string;
  readingMinutes: number;
  /**
   * Locale-keyed content. Partial on purpose — an article may exist in one
   * language before the other. Routing, the index and the sitemap all read
   * from this, so a locale that isn't present here is simply never linked
   * and never gets an hreflang alternate pointing at a 404.
   */
  content: Partial<Record<Locale, ArticleContent>>;
};
