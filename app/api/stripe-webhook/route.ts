import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

// Stripe webhook receiver. Verifies the signature and logs the event to
// data/stripe-events.jsonl — wire this up to your fulfillment logic
// (e.g. mark a lead as paid, provision the subscription) once real keys
// are in place. Returns 501 until STRIPE_WEBHOOK_SECRET is set.

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!webhookSecret || !secretKey) {
    return NextResponse.json({ ok: false, error: "Stripe webhook not configured yet." }, { status: 501 });
  }

  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(secretKey, { apiVersion: "2024-06-20" });
    const event = stripe.webhooks.constructEvent(body, sig ?? "", webhookSecret);

    const dir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(
      path.join(dir, "stripe-events.jsonl"),
      JSON.stringify({ type: event.type, id: event.id, receivedAt: new Date().toISOString() }) + "\n"
    );

    // Extend here: on "checkout.session.completed", look up the lead by
    // email and mark it paid; on subscription events, update plan status.

    return NextResponse.json({ received: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 400 });
  }
}
