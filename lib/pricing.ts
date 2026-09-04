// Locale-independent numeric pricing config, index-aligned with the tier
// arrays in the content dictionaries (dict.pricing.getCompliant.tiers /
// stayCompliant.tiers). Kept separate from copy so the checkout wiring
// doesn't depend on parsing localized price strings.
//
// Indicative starting prices, set deliberately to reflect the real service
// burden of implementation and post-go-live managed operations. Every
// engagement is scoped before a final quote is issued.

export const GET_COMPLIANT_PRICING = [
  { key: "starter", amountAed: 9500, mode: "payment" as const },
  { key: "growth", amountAed: 22000, mode: "payment" as const },
  { key: "enterprise", amountAed: null, mode: null },
];

export const STAY_COMPLIANT_PRICING = [
  { key: "essential", amountAed: 1500, mode: "subscription" as const },
  { key: "standard", amountAed: 3500, mode: "subscription" as const },
  { key: "enterpriseVolume", amountAed: null, mode: null },
];

export function toFils(aed: number): number {
  return Math.round(aed * 100);
}
