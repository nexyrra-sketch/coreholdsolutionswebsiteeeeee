// Locale-independent numeric pricing config, index-aligned with the tier
// arrays in the content dictionaries (dict.pricing.getCompliant.tiers /
// stayCompliant.tiers). Kept separate from copy so the checkout wiring
// doesn't depend on parsing localized price strings.
//
// PLACEHOLDER FIGURES — see planning/phase-1-content-plan.md and the
// handoff README. Replace with real pricing before launch.

export const GET_COMPLIANT_PRICING = [
  { key: "starter", amountAed: 4500, mode: "payment" as const },
  { key: "growth", amountAed: 9500, mode: "payment" as const },
  { key: "enterprise", amountAed: null, mode: null },
];

export const STAY_COMPLIANT_PRICING = [
  { key: "essential", amountAed: 350, mode: "subscription" as const },
  { key: "standard", amountAed: 750, mode: "subscription" as const },
  { key: "enterpriseVolume", amountAed: null, mode: null },
];

export function toFils(aed: number): number {
  return Math.round(aed * 100);
}
