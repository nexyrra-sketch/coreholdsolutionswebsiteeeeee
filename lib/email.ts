import type { Lead } from "./db/types";
import { BRAND } from "./brand";

// Real send when RESEND_API_KEY is set. Otherwise logs the exact content
// that would have been sent to the console and to data/email-log.jsonl, so
// the lead flow is fully testable end-to-end before a real email provider
// is connected — and so nobody mistakes a console log for a delivered email.

type EmailResult = { sent: boolean; provider: "resend" | "log-only"; error?: string };

async function logOnly(to: string, subject: string, body: string): Promise<EmailResult> {
  const fs = await import("node:fs");
  const path = await import("node:path");
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const line = JSON.stringify({ to, subject, body, loggedAt: new Date().toISOString() });
  fs.appendFileSync(path.join(dir, "email-log.jsonl"), line + "\n");
  // eslint-disable-next-line no-console
  console.log(`[email:log-only] to=${to} subject="${subject}"`);
  return { sent: false, provider: "log-only" };
}

async function sendViaResend(to: string, subject: string, html: string): Promise<EmailResult> {
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.LEADS_FROM_EMAIL || `CoreholdSolutions <notifications@${BRAND.domain}>`;
    const { error } = await resend.emails.send({ from, to, subject, html });
    if (error) return { sent: false, provider: "resend", error: String(error) };
    return { sent: true, provider: "resend" };
  } catch (err) {
    return { sent: false, provider: "resend", error: err instanceof Error ? err.message : String(err) };
  }
}

async function send(to: string, subject: string, html: string): Promise<EmailResult> {
  if (process.env.RESEND_API_KEY) return sendViaResend(to, subject, html);
  return logOnly(to, subject, html);
}

export async function sendTeamNotification(lead: Lead): Promise<EmailResult> {
  const teamEmail = process.env.LEADS_NOTIFY_EMAIL || BRAND.email;
  const subject = `New lead: ${lead.businessName} (${lead.tier ?? "unscoped"})`;
  const html = `
    <h2>New lead from ${lead.source === "calculator" ? "the readiness calculator" : "the contact form"}</h2>
    <p><strong>Business:</strong> ${lead.businessName}</p>
    <p><strong>Contact:</strong> ${lead.contactName} — ${lead.email} ${lead.phone ? `— ${lead.phone}` : ""}</p>
    <p><strong>Revenue band:</strong> ${lead.revenueBand ?? "—"}</p>
    <p><strong>Invoicing method:</strong> ${lead.invoicingMethod ?? "—"}</p>
    <p><strong>Tier:</strong> ${lead.tier ?? "—"}</p>
    <p><strong>Appoint by:</strong> ${lead.appointBy ?? "—"}</p>
    <p><strong>Live by:</strong> ${lead.liveBy ?? "—"}</p>
    ${lead.message ? `<p><strong>Message:</strong> ${lead.message}</p>` : ""}
    <p><strong>Locale:</strong> ${lead.locale}</p>
  `;
  return send(teamEmail, subject, html);
}

export async function sendCustomerConfirmation(lead: Lead): Promise<EmailResult> {
  const subject =
    lead.locale === "ar"
      ? "استلمنا طلبكم — كورهولد سوليوشنز"
      : "We've got your details — CoreholdSolutions";
  const html =
    lead.locale === "ar"
      ? `<p>مرحبًا ${lead.contactName}،</p><p>شكرًا لتواصلكم مع كورهولد سوليوشنز. استلم فريقنا تفاصيلكم وسيتواصل معكم خلال يوم عمل واحد.</p>`
      : `<p>Hi ${lead.contactName},</p><p>Thanks for reaching out to CoreholdSolutions. Our team has your details and will follow up within one business day.</p>`;
  return send(lead.email, subject, html);
}
