import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/db/leads";
import { markNotified } from "@/lib/db/leads";
import { sendTeamNotification, sendCustomerConfirmation } from "@/lib/email";

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const {
    source, locale, businessName, contactName, email, phone,
    revenueBand, invoicingMethod, tier, message,
    industry, system, entities, stage, aspStatus,
    landingPage, referrer, utmSource, utmCampaign,
  } = body ?? {};

  if (!businessName || !contactName || !email) {
    return NextResponse.json(
      { ok: false, error: "businessName, contactName, and email are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  try {
    const lead = await saveLead({
      source: source === "contact" ? "contact" : "calculator",
      locale: locale === "ar" ? "ar" : "en",
      businessName,
      contactName,
      email,
      phone: phone || null,
      revenueBand: revenueBand || null,
      invoicingMethod: invoicingMethod || null,
      tier: tier || null,
      message: message || null,
      industry: industry || null,
      system: system || null,
      entities: entities || null,
      stage: stage || null,
      aspStatus: aspStatus || null,
      landingPage: landingPage || null,
      referrer: referrer || null,
      utmSource: utmSource || null,
      utmCampaign: utmCampaign || null,
    });

    const [teamResult, customerResult] = await Promise.all([
      sendTeamNotification(lead),
      sendCustomerConfirmation(lead),
    ]);

    if (teamResult.sent) markNotified(lead.id, "notified_team");
    if (customerResult.sent) markNotified(lead.id, "notified_customer");

    return NextResponse.json({
      ok: true,
      leadId: lead.id,
      emails: { team: teamResult.provider, customer: customerResult.provider },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Lead save failed:", err);
    return NextResponse.json({ ok: false, error: "Could not save lead." }, { status: 500 });
  }
}
