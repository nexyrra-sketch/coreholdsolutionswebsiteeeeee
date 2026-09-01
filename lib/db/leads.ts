import type { Lead, LeadInput } from "./types";
import { insertLeadSqlite, getAllLeadsSqlite, markNotifiedSqlite } from "./sqlite";
import { insertLeadSupabase, getAllLeadsSupabase, getSupabaseClient } from "./supabase";
import { DEADLINES, tierForRevenue, type RevenueBand } from "@/lib/deadlines";

function usingSupabase() {
  return !!getSupabaseClient();
}

export async function saveLead(input: LeadInput): Promise<Lead> {
  let appointBy: string | null = null;
  let liveBy: string | null = null;
  if (input.revenueBand) {
    const tier = tierForRevenue(input.revenueBand as RevenueBand);
    appointBy = DEADLINES[tier].appoint.toISOString();
    liveBy = DEADLINES[tier].live.toISOString();
  }

  const withDeadlines = { ...input, appointBy, liveBy };

  if (usingSupabase()) {
    return insertLeadSupabase(withDeadlines);
  }
  return insertLeadSqlite(withDeadlines);
}

export async function getAllLeads(): Promise<Lead[]> {
  if (usingSupabase()) return getAllLeadsSupabase();
  return getAllLeadsSqlite();
}

export function markNotified(id: number | string, field: "notified_team" | "notified_customer") {
  // Supabase path: best-effort, not blocking the response either way.
  if (!usingSupabase()) markNotifiedSqlite(id, field);
}

export const activeBackend = () => (usingSupabase() ? "supabase" : "sqlite (local file: data/chs.db)");
