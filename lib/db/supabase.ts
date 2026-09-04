import { createClient } from "@supabase/supabase-js";
import type { Lead, LeadInput } from "./types";

// Optional backend. Activates automatically once SUPABASE_URL and
// SUPABASE_SERVICE_ROLE_KEY are set (see lib/db/leads.ts and the handoff
// README for the schema this expects).

export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function insertLeadSupabase(
  lead: LeadInput & { appointBy?: string | null; liveBy?: string | null }
): Promise<Lead> {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase not configured");

  const { data, error } = await supabase
    .from("leads")
    .insert({
      source: lead.source,
      locale: lead.locale,
      business_name: lead.businessName,
      contact_name: lead.contactName,
      email: lead.email,
      phone: lead.phone ?? null,
      revenue_band: lead.revenueBand ?? null,
      invoicing_method: lead.invoicingMethod ?? null,
      industry: lead.industry ?? null,
      system: lead.system ?? null,
      entities: lead.entities ?? null,
      stage: lead.stage ?? null,
      asp_status: lead.aspStatus ?? null,
      landing_page: lead.landingPage ?? null,
      referrer: lead.referrer ?? null,
      utm_source: lead.utmSource ?? null,
      utm_campaign: lead.utmCampaign ?? null,

      tier: lead.tier ?? null,
      message: lead.message ?? null,
      appoint_by: lead.appointBy ?? null,
      live_by: lead.liveBy ?? null,
    })
    .select()
    .single();

  if (error) throw error;

  return {
    id: data.id,
    source: data.source,
    locale: data.locale,
    businessName: data.business_name,
    contactName: data.contact_name,
    email: data.email,
    phone: data.phone,
    revenueBand: data.revenue_band,
    invoicingMethod: data.invoicing_method,
    industry: data.industry,
    system: data.system,
    entities: data.entities,
    stage: data.stage,
    aspStatus: data.asp_status,
    landingPage: data.landing_page,
    referrer: data.referrer,
    utmSource: data.utm_source,
    utmCampaign: data.utm_campaign,

    tier: data.tier,
    message: data.message,
    appointBy: data.appoint_by,
    liveBy: data.live_by,
    notifiedTeam: !!data.notified_team,
    notifiedCustomer: !!data.notified_customer,
    createdAt: data.created_at,
  };
}

export async function getAllLeadsSupabase(): Promise<Lead[]> {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase not configured");
  const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row: any) => ({
    id: row.id,
    source: row.source,
    locale: row.locale,
    businessName: row.business_name,
    contactName: row.contact_name,
    email: row.email,
    phone: row.phone,
    revenueBand: row.revenue_band,
    invoicingMethod: row.invoicing_method,
    industry: row.industry,
    system: row.system,
    entities: row.entities,
    stage: row.stage,
    aspStatus: row.asp_status,
    landingPage: row.landing_page,
    referrer: row.referrer,
    utmSource: row.utm_source,
    utmCampaign: row.utm_campaign,

    tier: row.tier,
    message: row.message,
    appointBy: row.appoint_by,
    liveBy: row.live_by,
    notifiedTeam: !!row.notified_team,
    notifiedCustomer: !!row.notified_customer,
    createdAt: row.created_at,
  }));
}

/** SQL to run once in the Supabase SQL editor before pointing env vars at it. */
export const SUPABASE_SCHEMA_SQL = `
create table if not exists leads (
  id bigint generated always as identity primary key,
  source text not null,
  locale text not null,
  business_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  revenue_band text,
  invoicing_method text,
  industry text,
  system text,
  entities text,
  stage text,
  asp_status text,
  landing_page text,
  referrer text,
  utm_source text,
  utm_campaign text,

  tier text,
  message text,
  appoint_by text,
  live_by text,
  notified_team boolean not null default false,
  notified_customer boolean not null default false,
  created_at timestamptz not null default now()
);
alter table leads enable row level security;
create policy "service role full access" on leads for all using (true) with check (true);
`;
