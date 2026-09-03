import type { Article } from "../types";

export const uaeSmeGuide: Article = {
  slug: "uae-e-invoicing-guide-for-smes",
  published: "2026-09-03",
  readingMinutes: 6,
  content: {
    en: {
      title: "UAE e-invoicing for small and medium businesses: a practical guide",
      description:
        "You do not need to be an enterprise with an SAP system to be in scope for UAE e-invoicing. Here is what actually changes for a small or mid-sized business, in plain terms, with no jargon assumed.",
      intro:
        "If your business runs on QuickBooks, Zoho, Xero, or a spreadsheet, it is easy to read about Peppol networks and UBL formats and assume this mandate was written for someone else's company. It was not. Almost every VAT-registered business in the UAE is in scope, regardless of size, and the smaller your finance team, the more this guide is written for you.",
      body: [
        { type: "h2", text: "The myth worth killing first" },
        {
          type: "p",
          text: "\"This is an enterprise thing\" is the single most common misunderstanding we hear from smaller businesses, and it is wrong. The mandate applies by revenue band, not by company size or system sophistication. If you are registered for VAT in the UAE, you are in scope — the only question is which deadline applies to you.",
        },
        {
          type: "p",
          text: "Businesses under AED 50 million in annual revenue — which is the overwhelming majority of registered businesses in the country — need to appoint an Accredited Service Provider by 31 March 2027 and be fully live, issuing and receiving structured e-invoices, by 1 July 2027.",
        },
        { type: "h2", text: "What actually changes for you" },
        {
          type: "p",
          text: "Here is the part that surprises most small business owners: your day-to-day invoicing does not change. You do not learn a new invoicing process, and your staff do not start filling out different forms. You keep creating invoices the way you do today — through QuickBooks, Zoho, Xero, or whatever you currently use.",
        },
        {
          type: "p",
          text: "What changes is what happens after you hit send. Instead of that invoice going out as a PDF attachment, your accounting system connects to an Accredited Service Provider, which converts your invoice into the required structured format and transmits it through the mandated network. Your customer's system receives structured data it can process automatically, and the Federal Tax Authority receives a report of the transaction. None of this requires your team to learn Peppol or PINT-AE as concepts — that is the provider's job, not yours.",
        },
        { type: "h2", text: "Where the real work is" },
        {
          type: "h3", text: "If you already use QuickBooks, Zoho, or Xero" },
        {
          type: "p",
          text: "This is the easiest starting position. All three platforms have standard connection paths to accredited providers, so the integration itself is usually straightforward. The work is mostly in appointing the right provider and making sure your existing customer and product data is clean enough to map correctly — messy or duplicated records cause more integration headaches than the technology itself.",
        },
        { type: "h3", text: "If you invoice through spreadsheets or manually" },
        {
          type: "p",
          text: "This is the position that needs the most lead time, and it is worth being honest about why: the real project here is not e-invoicing compliance, it is moving off spreadsheets onto a connected accounting system in the first place. That is a bigger change than the mandate itself, which is exactly why it should not be left until a few months before your deadline. If this describes you, start the conversation now rather than in early 2027.",
        },
        { type: "h2", text: "What it costs, roughly" },
        {
          type: "p",
          text: "For a single-entity small business on standard software, the one-time integration and go-live work is typically the smallest cost band in the market, with an ongoing monthly cost that scales with how many invoices you actually send — a low-volume business pays for a low-volume tier. The number that matters is not a headline price, it is what a provider quotes against your actual invoice volume and your actual system, which is why any serious quote should follow a real conversation about your business, not a generic price list.",
        },
        { type: "h2", text: "Three mistakes smaller businesses make" },
        {
          type: "ul",
          items: [
            "Waiting for the deadline to feel close. The appointment deadline, not the go-live deadline, is the one that matters for planning — and every business under the threshold shares the same date, which means providers and integrators will have a queue in early 2027.",
            "Assuming the cheapest provider quote is the cheapest outcome. Per-invoice pricing that looks attractive at low volume can become the most expensive option as your business grows, and support quality is not visible in a price sheet.",
            "Treating this as a one-time project rather than an ongoing responsibility. Two of the six penalties in the current fine schedule are for failing to report system failures or data changes after you are already live — the obligation does not end at go-live.",
          ],
        },
        {
          type: "callout",
          title: "The honest starting point",
          text: "If you are not sure whether your current setup can connect cleanly to a provider, that uncertainty is normal and it is exactly what a first scoping conversation resolves — not something you need to figure out on your own before reaching out.",
        },
      ],
      sources: [
        {
          label: "Cabinet Decision No. 106 of 2025 on Violations and Administrative Penalties — Ministry of Finance (PDF)",
          url: "https://mof.gov.ae/wp-content/uploads/2025/12/Cabinet-Decision-Violations-and-Penalties-eInvoicing-final-version-en-8.12.25.pdf",
        },
      ],
    },
  },
};
