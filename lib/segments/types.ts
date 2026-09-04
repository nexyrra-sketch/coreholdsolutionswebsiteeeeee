import type { Locale } from "@/lib/i18n/config";

/**
 * Industry and ERP landing pages. Same content-as-data shape as Insights:
 * one file per segment, locale-partial content, and a registry that is the
 * single source of truth for routing, the sitemap and hreflang — so a page
 * can never link to a translation that does not exist.
 */

export type SegmentKind = "industry" | "erp";

export type Point = {
  title: string;
  body: string;
};

export type SegmentContent = {
  /** Page <h1>. */
  h1: string;
  /** Opening paragraph under the h1. */
  lede: string;
  /** Why this segment is genuinely different from the generic case. */
  differentHeading: string;
  different: Point[];
  /** The systems / data environment typically found here. */
  environmentHeading: string;
  environment: Point[];
  /** What tends to need resolving during implementation. */
  issuesHeading: string;
  issues: Point[];
  /** What CHS does about it. */
  approachHeading: string;
  approach: string[];
  /** Closing honest note — scope limits, or what we are not claiming. */
  note: string;
  cta: string;
};

export type Segment = {
  kind: SegmentKind;
  /** URL slug, stable once published. */
  slug: string;
  /** Short label for nav, cards and cross-links. */
  label: Partial<Record<Locale, string>>;
  /** One-line description used on index cards and meta descriptions. */
  summary: Partial<Record<Locale, string>>;
  content: Partial<Record<Locale, SegmentContent>>;
};
