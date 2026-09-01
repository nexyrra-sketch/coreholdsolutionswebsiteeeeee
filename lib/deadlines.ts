// Single source of truth for the four regulatory dates. Verified against
// mof.gov.ae and corroborating professional sources on 1 September 2026 —
// see planning/phase-1-content-plan.md for sources. Change this file, and
// only this file, if the Ministry of Finance revises the timeline again.

export const DEADLINES = {
  large: {
    appoint: new Date("2026-10-30T00:00:00+04:00"),
    live: new Date("2027-01-01T00:00:00+04:00"),
  },
  sme: {
    appoint: new Date("2027-03-31T00:00:00+04:00"),
    live: new Date("2027-07-01T00:00:00+04:00"),
  },
  government: {
    appoint: new Date("2027-03-31T00:00:00+04:00"),
    live: new Date("2027-10-01T00:00:00+04:00"),
  },
} as const;

export type RevenueBand = "under_3m" | "3m_50m" | "over_50m";
export type InvoicingMethod = "spreadsheet" | "smb_software" | "erp" | "custom";

export type ComplianceTier = "large" | "sme";

export function tierForRevenue(revenue: RevenueBand): ComplianceTier {
  return revenue === "over_50m" ? "large" : "sme";
}

export function deadlinesForTier(tier: ComplianceTier) {
  return DEADLINES[tier];
}
