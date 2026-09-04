import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import type { Segment, SegmentKind, SegmentContent } from "./types";

import buildingMaterials from "./industries/building-materials";
import generalTrading from "./industries/general-trading";
import logistics from "./industries/logistics";
import distribution from "./industries/distribution-wholesale";
import manufacturing from "./industries/manufacturing";
import contracting from "./industries/contracting";
import facilities from "./industries/facilities-management";

import quickbooks from "./erp/quickbooks";
import zoho from "./erp/zoho";
import xero from "./erp/xero";
import sap from "./erp/sap";
import oracle from "./erp/oracle";
import spreadsheets from "./erp/spreadsheets";

/**
 * Registry. Ordered deliberately — this is the order they appear on index
 * pages, highest commercial priority first, not alphabetical.
 */
const ALL: Segment[] = [
  buildingMaterials,
  generalTrading,
  distribution,
  logistics,
  manufacturing,
  contracting,
  facilities,
  quickbooks,
  zoho,
  xero,
  sap,
  oracle,
  spreadsheets,
];

export const basePath: Record<SegmentKind, string> = {
  industry: "/industries",
  erp: "/erp",
};

export function listSegments(kind: SegmentKind, locale: Locale): Segment[] {
  return ALL.filter((s) => s.kind === kind && s.content[locale] !== undefined);
}

export function getSegment(kind: SegmentKind, slug: string): Segment | undefined {
  return ALL.find((s) => s.kind === kind && s.slug === slug);
}

export function getSegmentContent(kind: SegmentKind, slug: string, locale: Locale): SegmentContent | undefined {
  return getSegment(kind, slug)?.content[locale];
}

/** Locales a given segment was actually written in. Drives hreflang. */
export function segmentLocales(kind: SegmentKind, slug: string): Locale[] {
  const seg = getSegment(kind, slug);
  if (!seg) return [];
  return locales.filter((l) => seg.content[l] !== undefined);
}

/** Every (kind, slug, locale) that actually exists. Drives static params and the sitemap. */
export function segmentRoutes(kind?: SegmentKind): { kind: SegmentKind; slug: string; locale: Locale }[] {
  const out: { kind: SegmentKind; slug: string; locale: Locale }[] = [];
  for (const seg of ALL) {
    if (kind && seg.kind !== kind) continue;
    for (const locale of locales) {
      if (seg.content[locale] !== undefined) out.push({ kind: seg.kind, slug: seg.slug, locale });
    }
  }
  return out;
}
