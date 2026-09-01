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
    appoint_by TEXT,
    live_by TEXT,
    notified_team INTEGER NOT NULL DEFAULT 0,
    notified_customer INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

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
    INSERT INTO leads (source, locale, business_name, contact_name, email, phone, revenue_band, invoicing_method, tier, message, appoint_by, live_by)
    VALUES (@source, @locale, @businessName, @contactName, @email, @phone, @revenueBand, @invoicingMethod, @tier, @message, @appointBy, @liveBy)
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
