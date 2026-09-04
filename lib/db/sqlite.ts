import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import type { Lead, LeadInput } from "./types";

// A real, working, local database. This is the default backend so that lead
// capture is genuinely operational out of the box, with no third-party
// account required. Swap to Supabase (lib/db/supabase.ts) by setting
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY — see lib/db/leads.ts.

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, "chs.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT NOT NULL,
    locale TEXT NOT NULL,
    business_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    revenue_band TEXT,
    invoicing_method TEXT,
    tier TEXT,
    message TEXT,
    industry TEXT,
    system TEXT,
    entities TEXT,
    stage TEXT,
    asp_status TEXT,
    landing_page TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_campaign TEXT,
    appoint_by TEXT,
    live_by TEXT,
    notified_team INTEGER NOT NULL DEFAULT 0,
    notified_customer INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// Additive migration: existing databases predate the qualification and
// attribution columns, so add any that are missing rather than requiring a
// wipe. Safe to run on every boot.
{
  const existing = new Set<string>(
    (db.prepare("PRAGMA table_info(leads)").all() as { name: string }[]).map((c) => c.name)
  );
  for (const col of ["industry", "system", "entities", "stage", "asp_status", "landing_page", "referrer", "utm_source", "utm_campaign"]) {
    if (!existing.has(col)) db.exec(`ALTER TABLE leads ADD COLUMN ${col} TEXT`);
  }
}

function rowToLead(row: any): Lead {
  return {
    id: row.id,
    source: row.source,
    locale: row.locale,
    businessName: row.business_name,
    contactName: row.contact_name,
    email: row.email,
    phone: row.phone,
    revenueBand: row.revenue_band,
    invoicingMethod: row.invoicing_method,
    tier: row.tier,
    message: row.message,
    industry: row.industry,
    system: row.system,
    entities: row.entities,
    stage: row.stage,
    aspStatus: row.asp_status,
    landingPage: row.landing_page,
    referrer: row.referrer,
    utmSource: row.utm_source,
    utmCampaign: row.utm_campaign,
    appointBy: row.appoint_by,
    liveBy: row.live_by,
    notifiedTeam: !!row.notified_team,
    notifiedCustomer: !!row.notified_customer,
    createdAt: row.created_at,
  };
}

export function insertLeadSqlite(
  lead: LeadInput & { appointBy?: string | null; liveBy?: string | null }
): Lead {
  const stmt = db.prepare(`
    INSERT INTO leads (source, locale, business_name, contact_name, email, phone, revenue_band, invoicing_method, tier, message, industry, system, entities, stage, asp_status, landing_page, referrer, utm_source, utm_campaign, appoint_by, live_by)
    VALUES (@source, @locale, @businessName, @contactName, @email, @phone, @revenueBand, @invoicingMethod, @tier, @message, @industry, @system, @entities, @stage, @aspStatus, @landingPage, @referrer, @utmSource, @utmCampaign, @appointBy, @liveBy)
  `);
  const info = stmt.run({
    source: lead.source,
    locale: lead.locale,
    businessName: lead.businessName,
    contactName: lead.contactName,
    email: lead.email,
    phone: lead.phone ?? null,
    revenueBand: lead.revenueBand ?? null,
    invoicingMethod: lead.invoicingMethod ?? null,
    tier: lead.tier ?? null,
    message: lead.message ?? null,
    industry: lead.industry ?? null,
    system: lead.system ?? null,
    entities: lead.entities ?? null,
    stage: lead.stage ?? null,
    aspStatus: lead.aspStatus ?? null,
    landingPage: lead.landingPage ?? null,
    referrer: lead.referrer ?? null,
    utmSource: lead.utmSource ?? null,
    utmCampaign: lead.utmCampaign ?? null,
    appointBy: lead.appointBy ?? null,
    liveBy: lead.liveBy ?? null,
  });
  const row = db.prepare("SELECT * FROM leads WHERE id = ?").get(info.lastInsertRowid);
  return rowToLead(row);
}

export function markNotifiedSqlite(id: number | string, field: "notified_team" | "notified_customer") {
  db.prepare(`UPDATE leads SET ${field} = 1 WHERE id = ?`).run(id);
}

export function getAllLeadsSqlite(): Lead[] {
  const rows = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
  return rows.map(rowToLead);
}

export default db;
