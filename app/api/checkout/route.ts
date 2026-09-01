import { NextRequest, NextResponse } from "next/server";
import { BRAND } from "@/lib/brand";

// Creates a Stripe Checkout session for a pricing tier. Returns 501 with a
// clear message until STRIPE_SECRET_KEY is set — the pricing page falls
// back to "Talk to us" in that case rather than showing a broken button.

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { ok: false, error: "Payments are not connected yet. Set STRIPE_SECRET_KEY to enable checkout." },
      { status: 501 }
    );
  }

  const { tierName, amountFils, mode, customerEmail, locale } = await req.json().catch(() => ({}));

  if (!tierName || !amountFils || !mode) {
    return NextResponse.json({ ok: false, error: "tierName, amountFils, and mode are required." }, { status: 400 });
  }

  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(secretKey, { apiVersion: "2024-06-20" });
    const base = `https://${BRAND.domain}`;
    const localePrefix = locale === "ar" ? "/ar" : "/en";

    const session = await stripe.checkout.sessions.create({
      mode: mode === "subscription" ? "subscription" : "payment",
      customer_email: customerEmail || undefined,
      line_items: [
        {
          price_data: {
            currency: "aed",
            product_data: { name: `${tierName} — ${BRAND.fullEn}` },
            unit_amount: amountFils,
            ...(mode === "subscription" ? { recurring: { interval: "month" } } : {}),
          },
          quantity: 1,
        },
      ],
      success_url: `${base}${localePrefix}/pricing?checkout=success`,
      cancel_url: `${base}${localePrefix}/pricing?checkout=cancelled`,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Stripe checkout failed:", err);
    return NextResponse.json({ ok: false, error: "Could not start checkout." }, { status: 500 });
  }
}
