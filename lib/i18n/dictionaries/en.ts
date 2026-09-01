// English content dictionary.
// This is the single source of truth for every string on the English side of
// the site. The Arabic dictionary (ar.ts) mirrors this shape exactly.

const en = {
  meta: {
    siteName: "CoreholdSolutions",
    shortName: "CHS",
    tagline: "UAE e-invoicing, handled.",
    ogDescription:
      "CoreholdSolutions connects your accounting or ERP system to an accredited UAE e-invoicing provider, gets you compliant before your deadline, and keeps you that way every month.",
  },

  nav: {
    home: "Home",
    howItWorks: "How It Works",
    pricing: "Pricing",
    glossary: "Glossary & FAQ",
    about: "About",
    contact: "Contact",
    checkDeadline: "Check your deadline",
    languageSwitch: "العربية",
    languageSwitchAria: "Switch to Arabic",
  },

  footer: {
    companyFull: "CoreholdSolutions",
    companyFullAr: "كورهولد سوليوشنز",
    description:
      "An integration and implementation partner for UAE e-invoicing compliance — not an accredited service provider itself.",
    quickLinksHeading: "Site",
    resourcesHeading: "Resources",
    contactHeading: "Contact",
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    rights: "All rights reserved.",
    disclaimer:
      "CoreholdSolutions provides integration, implementation, and advisory services. It is not itself an FTA-accredited service provider. Nothing on this site is tax or legal advice — for a definitive read on your obligations, confirm with the Federal Tax Authority or your tax advisor.",
  },

  hero: {
    eyebrow: "Federal Decree-Law No. 16 of 2024 · UAE Mandatory E-Invoicing",
    h1: "Your e-invoicing deadline is already on the calendar.",
    subhead:
      "Every VAT-registered business in the UAE will send and receive invoices through an accredited e-invoicing system — on a schedule set by revenue, not by choice. We connect your existing accounting software to an accredited provider, do the technical work, and keep you compliant after that. You keep invoicing the way you already do.",
    ctaPrimary: "Find your deadline",
    ctaSecondary: "See how CHS works",
    countdown: {
      heading: "Time remaining until each deadline",
      largeLabel: "Large businesses",
      largeSub: "AED 50M+ annual revenue",
      largeAppoint: "Provider appointed by 30 Oct 2026",
      largeLive: "Live by 1 January 2027",
      smeLabel: "Everyone else",
      smeSub: "Below AED 50M annual revenue",
      smeAppoint: "Provider appointed by 31 Mar 2027",
      smeLive: "Live by 1 July 2027",
      days: "days",
      hours: "hrs",
      minutes: "min",
      seconds: "sec",
      liveNote: "Updating live",
      pastNote: "Deadline has passed",
    },
  },

  howItWorks: {
    eyebrow: "How CHS works",
    h2: "We get you connected. Then we keep you compliant.",
    intro:
      "Two things happen, in order — a one-time project to get your systems talking to an accredited provider, then an ongoing service that keeps every invoice moving correctly, month after month.",
    steps: [
      {
        n: "01",
        title: "We look at what you have.",
        body: "Your revenue tier sets your deadline. Your current setup — QuickBooks, Zoho, Xero, SAP, Oracle, or a spreadsheet — sets the amount of work. We assess both in the first conversation, no guessing.",
      },
      {
        n: "02",
        title: "We connect you and get you compliant.",
        body: "We link your accounting or ERP system to an accredited e-invoicing provider, map your invoice data into the required structured format, test the connection end to end, and fix whatever the testing turns up. Your team gets trained on anything that changes for them — usually very little.",
      },
      {
        n: "03",
        title: "We keep you compliant, every month.",
        body: "Once you're live, a CHS dashboard handles the ongoing sending and receiving of structured invoices, flags anything that gets rejected before it becomes a problem, and reconciles against your own books. You keep invoicing the way you already do — we handle what happens behind it.",
      },
    ],
    capabilitiesHeading: "Three capabilities, one team",
    capabilities: [
      {
        title: "Technical integration",
        body: "Connecting your existing accounting or ERP system — QuickBooks, Zoho, Xero, SAP, Oracle, spreadsheets — to an accredited e-invoicing provider.",
      },
      {
        title: "E-invoicing implementation",
        body: "Mapping your invoice data to the required structured format (PINT-AE / UBL XML), testing the connection, and fixing validation errors.",
      },
      {
        title: "Advisory",
        body: "Assessing your scope, your deadline, and your financial exposure, and guiding you through the whole process — start to finish.",
      },
    ],
    cta: "Talk to a consultant",
  },

  audiences: {
    eyebrow: "Built for both ends of the market",
    h2: "Whether you're a five-person shop or a listed enterprise",
    sme: {
      title: "Small and mid-sized business",
      body: "You've probably never heard of Peppol or PINT-AE, and you shouldn't need to. Tell us how you invoice today — most likely QuickBooks, Zoho, Xero, or a spreadsheet — and we handle the rest. Your invoicing process doesn't change from where you sit.",
    },
    enterprise: {
      title: "Enterprise & finance teams",
      body: "You're evaluating this on capability, reliability, and depth of ERP integration — SAP, Oracle, multi-entity structures. We scope the technical work properly, give you a real project plan, and stay accountable for the connection once it's live.",
    },
  },

  calculator: {
    eyebrow: "Readiness calculator",
    h2: "Find your exact deadline and what's at stake.",
    intro:
      "Two questions about your business. A clear answer: your deadline, your appointment date, and what a missed deadline could mean.",
    step1: {
      label: "What's your business's annual revenue?",
      options: [
        { value: "under_3m", label: "Under AED 3 million" },
        { value: "3m_50m", label: "AED 3 million – 50 million" },
        { value: "over_50m", label: "AED 50 million or more" },
      ],
    },
    step2: {
      label: "How do you currently invoice customers?",
      options: [
        { value: "spreadsheet", label: "Spreadsheets or manual / paper invoices" },
        { value: "smb_software", label: "QuickBooks, Zoho, or Xero" },
        { value: "erp", label: "SAP, Oracle, or another ERP system" },
        { value: "custom", label: "A custom or in-house system" },
      ],
    },
    step3: {
      heading: "Where should we send your result?",
      subheading: "We'll email your exact timeline and hold your place — no obligation.",
      fields: {
        businessName: "Business name",
        contactName: "Your name",
        email: "Email address",
        phone: "Phone number (optional)",
      },
      consent:
        "By submitting, you agree CHS can contact you about your e-invoicing deadline. See our Privacy Policy.",
      submit: "Show my results",
      submitting: "Calculating…",
    },
    back: "Back",
    next: "Next",
    stepOf: "Step {current} of {total}",
    results: {
      tierLarge: "Large business",
      tierSme: "SME / mid-sized business",
      headingLarge: "You're in the large-business track.",
      headingSme: "You're in the standard SME track.",
      appointByLabel: "Appoint an accredited provider by",
      liveByLabel: "Be live by",
      methodNoteHeading: "Based on how you invoice today",
      methodNotes: {
        spreadsheet:
          "Moving off spreadsheets onto a connected system is the biggest single piece of work here — budget more lead time, not less.",
        smb_software:
          "QuickBooks, Zoho, and Xero all connect to accredited providers through standard integrations — this is usually the most straightforward category we work with.",
        erp: "SAP and Oracle integrations take more scoping up front, but the connection itself is well understood — we've mapped this path before.",
        custom:
          "Custom and in-house systems need a proper technical assessment before we can scope the work — this is exactly what the first call is for.",
      },
      exposureHeading: "What a missed deadline means",
      exposureBody:
        "Missing your appointment or go-live date exposes your business to financial penalties under the UAE's tax administrative penalty regime. Exact amounts are set by the Federal Tax Authority, not by CHS — we won't invent a figure to scare you, but the exposure is real and it compounds the longer it's left unaddressed.",
      voluntaryNote:
        "Adopting before your mandatory date is allowed and carries no penalty — some businesses choose to get ahead of it rather than work against the deadline later.",
      ctaBook: "Book a scoping call",
      ctaPricing: "See pricing for this tier",
      restart: "Start over",
    },
  },

  pricing: {
    eyebrow: "Pricing",
    h1: "Two things you pay for: getting connected, and staying compliant.",
    intro:
      "A one-time project to get your systems connected and compliant, then a monthly subscription that keeps every invoice moving correctly. Every figure below is a starting point for the size of business it names — your exact quote depends on invoice volume and how complex your current setup is.",
    placeholderNotice:
      "Pricing shown is indicative and subject to confirmation on a scoping call.",
    getCompliant: {
      title: "Get Compliant",
      subtitle: "One-time integration & implementation",
      tiers: [
        {
          name: "Starter",
          forWhom: "Single entity, QuickBooks / Zoho / Xero, or spreadsheet-based",
          price: "From AED 4,500",
          priceNote: "one-time",
          features: [
            "Revenue-tier & deadline assessment",
            "Connection to your accredited provider",
            "Invoice data mapped to PINT-AE / UBL XML",
            "End-to-end validation testing",
            "Staff walkthrough on what changes",
          ],
        },
        {
          name: "Growth",
          forWhom: "Multiple entities, higher invoice volume, or mixed systems",
          price: "From AED 9,500",
          priceNote: "one-time",
          features: [
            "Everything in Starter",
            "Multi-entity / multi-VAT-registration setup",
            "Custom validation-error resolution",
            "Extended staff training",
            "Dedicated implementation lead",
          ],
        },
        {
          name: "Enterprise",
          forWhom: "SAP, Oracle, or custom ERP environments",
          price: "Request a quote",
          priceNote: "scoped to your systems",
          features: [
            "Full ERP integration scoping",
            "Custom field mapping across systems",
            "Staged rollout across entities",
            "Named technical account lead",
            "SLA-backed implementation timeline",
          ],
        },
      ],
    },
    stayCompliant: {
      title: "Stay Compliant",
      subtitle: "Monthly subscription, billed once you're live",
      tiers: [
        {
          name: "Essential",
          forWhom: "Up to 100 invoices / month",
          price: "AED 350",
          priceNote: "per month",
          features: [
            "Structured invoice generation & transmission",
            "Sent / received e-invoice dashboard",
            "Rejection flagging before it becomes a problem",
            "Monthly reconciliation against your records",
          ],
        },
        {
          name: "Standard",
          forWhom: "Up to 500 invoices / month",
          price: "AED 750",
          priceNote: "per month",
          features: [
            "Everything in Essential",
            "Priority rejection handling",
            "Quarterly compliance review",
            "Email + phone support",
          ],
        },
        {
          name: "Enterprise volume",
          forWhom: "500+ invoices / month, multi-entity reporting",
          price: "Request a quote",
          priceNote: "volume-based",
          features: [
            "Everything in Standard",
            "Multi-entity consolidated reporting",
            "Dedicated account manager",
            "Custom SLA",
          ],
        },
      ],
    },
    enterpriseCta: {
      title: "Running SAP, Oracle, or a multi-entity structure?",
      body: "Enterprise integrations get scoped individually — talk to us before you assume a self-serve tier fits.",
      cta: "Request an enterprise quote",
    },
    faqLink: "Have questions about how pricing works? See the glossary & FAQ.",
  },

  about: {
    eyebrow: "About CHS",
    h1: "We connect you to compliance. We don't pretend to be something we're not.",
    intro:
      "CoreholdSolutions is an integration, implementation, and advisory firm built around one UAE regulation with fixed, staggered deadlines. We're not an accredited service provider ourselves — we make sure the connection between your systems and one is correct, tested, and stays that way.",
    honesty: {
      title: "Where we stand on accreditation",
      body: "Becoming an FTA-Accredited Service Provider requires AED 50,000+ in paid-up capital, AED 2.5 million in professional insurance, ISO 27001 and ISO 22301 certification, two years of prior e-invoicing track record, and a 90-day accreditation process. CHS is not an ASP. We partner with one to deliver the connection your business needs. If and when we sign a named accredited-provider partnership, we'll say so here, specifically — until then, we'd rather be accurate than impressive.",
    },
    teamHeading: "Who you'll work with",
    team: {
      ghassan: {
        name: "Ghassan Adil",
        title: "Founder & Principal Consultant",
        bio: "Ghassan founded CoreholdSolutions because he watched a regulation with hard, fixed deadlines get talked about like abstract policy — easy to put off, hard to act on. He built CHS around the opposite instinct: give a business its exact date, its exact exposure, and a clear path through it, in language that doesn't require a finance background to follow. Ghassan works directly with clients as principal consultant — scoping engagements, setting the technical direction of every integration, and staying accountable for the result rather than handing it off after the first call.",
      },
      amro: {
        name: "Amro Idris",
        title: "Chief Implementation Officer",
        bio: "Amro runs the technical engine of CoreholdSolutions — the integration work, the data mapping, the validation testing, the part of the process that actually takes a business from “we have a deadline” to “we're live.” He oversees every client's connection into the accredited-provider network, from a single-entity QuickBooks setup to a multi-entity SAP environment, and owns the standard CHS holds itself to on every implementation: tested, validated, and working before we call it done.",
      },
    },
  },

  glossary: {
    eyebrow: "Glossary & FAQ",
    h1: "The terms, explained without the jargon.",
    intro:
      "E-invoicing comes with its own vocabulary. Here's what the terms actually mean, and answers to the questions we hear most from UAE business owners and finance teams.",
    items: [
      {
        q: "What is UAE e-invoicing?",
        a: "UAE e-invoicing is a government-mandated system for issuing, sending, and receiving invoices in a structured digital format, rather than a PDF or paper document. Instead of emailing an invoice to a customer, your accounting system sends structured invoice data to an accredited service provider, which delivers it to your customer's system and reports the transaction to the Federal Tax Authority. It's established under Federal Decree-Law No. 16 of 2024 and Ministerial Decisions No. 243 and 244 of 2025, and it applies to virtually every VAT-registered business in the UAE, on a schedule based on revenue.",
      },
      {
        q: "Who needs an accredited service provider (ASP)?",
        a: "Every VAT-registered business in the UAE will need to route its invoices through an accredited service provider once its mandatory date arrives — there's no way around the requirement itself. Large businesses (AED 50 million or more in annual revenue) need one appointed by 30 October 2026. Every other VAT-registered business needs one appointed by 31 March 2027. Businesses can appoint one earlier and adopt voluntarily, with no penalty for doing so ahead of their date.",
      },
      {
        q: "What's the UAE e-invoicing deadline for small and mid-sized businesses?",
        a: "If your business earns under AED 50 million a year in revenue, you need an accredited service provider appointed by 31 March 2027, and you need to be live — actually sending and receiving structured e-invoices — by 1 July 2027. Adopting earlier is allowed and carries no penalty; it just means you're compliant sooner rather than working against a tighter deadline later.",
      },
      {
        q: "What's the UAE e-invoicing deadline for large businesses?",
        a: "If your business earns AED 50 million or more a year in revenue, you need an accredited service provider appointed by 30 October 2026, and you need to be live by 1 January 2027. That appointment deadline was extended from an original date of 31 July 2026 — the go-live date of 1 January 2027 has not moved.",
      },
      {
        q: "What is Peppol and the 5-corner model?",
        a: "Peppol is an international network and set of standards for exchanging structured business documents, including e-invoices, between different systems and countries. The UAE's e-invoicing system runs on a “five-corner model”: your system (corner 1) sends an invoice through your accredited service provider (corner 2), which delivers it through the Peppol network to your customer's accredited service provider (corner 3) and on to your customer's system (corner 4) — while a fifth corner, a central government platform, receives reporting data on the transaction for tax purposes. You don't manage any of these connections yourself; your accredited service provider and integration partner handle it.",
      },
      {
        q: "What is PINT-AE?",
        a: "PINT-AE is the specific structured data format the UAE requires e-invoices to be issued in — a UAE-localized version of an international invoicing standard (UBL XML), adapted for UAE tax rules. Instead of a PDF, an invoice becomes a structured data file that software can read, validate, and process automatically. Getting your invoice data mapped correctly into this format — and validated so it doesn't get rejected — is one of the main technical steps in becoming compliant.",
      },
      {
        q: "What is an Accredited Service Provider (ASP)?",
        a: "An Accredited Service Provider is a company certified by the UAE government to transmit e-invoices on a business's behalf. Becoming one is a serious undertaking — it requires at least AED 50,000 in paid-up capital, AED 2.5 million in professional insurance, ISO 27001 and ISO 22301 certification, two years of prior e-invoicing experience, and a 90-day accreditation process. Most businesses don't become an ASP themselves; they connect their existing systems to one, which is the service CHS provides.",
      },
      {
        q: "Is e-invoicing mandatory right now, or can I wait?",
        a: "E-invoicing isn't mandatory yet for any business — the mandatory dates start 1 January 2027 for large businesses and 1 July 2027 for everyone else. Voluntary adoption is open before then, with no penalty. The appointment deadlines (30 October 2026 for large businesses, 31 March 2027 for everyone else) are what actually force the timeline — leaving the integration work until close to your go-live date is what tends to create last-minute pressure.",
      },
      {
        q: "What happens if a business misses its deadline?",
        a: "Missing your e-invoicing deadline exposes a business to financial penalties under the UAE's tax administrative penalty regime — the same enforcement framework that applies to other VAT and tax compliance failures. Exact penalty amounts are set by the Federal Tax Authority rather than by CHS, so we'd rather point you to your tax advisor or the FTA directly for a specific figure than guess at one here.",
      },
      {
        q: "Does CHS issue my invoices for me?",
        a: "No — you keep creating and sending invoices the way you already do, through the accounting or ERP system your team already uses. What changes is what happens behind that: your system gets connected to an accredited provider, your invoice data gets automatically converted into the required structured format, and it gets transmitted and reported correctly. Your day-to-day invoicing process doesn't change; the plumbing behind it does.",
      },
      {
        q: "What accounting or ERP systems can CHS connect?",
        a: "We've built integrations for the systems most UAE businesses already use — QuickBooks, Zoho, and Xero on the smaller end, SAP and Oracle for larger enterprises, and custom setups including spreadsheet-based invoicing for businesses that haven't moved to dedicated software yet. If you're not sure whether your setup can be connected, that's exactly what the first conversation is for.",
      },
      {
        q: "Is CHS itself an accredited service provider?",
        a: "No, and we want to be upfront about that. CHS is an integration and implementation partner: we connect your systems to an accredited service provider and manage the technical work of getting and keeping you compliant. We're not a certified ASP ourselves, and until we can name a signed accredited-provider partnership on this site, we won't imply one that doesn't exist.",
      },
      {
        q: "Will CHS's help get my business ranking higher on Google?",
        a: "That's not what we do, and we'd rather say so than let you assume it. This site is built to genuine SEO fundamentals — but ranking depends on many factors beyond any one company's control, builds over time, and nothing legitimate can promise a top placement, including us.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    h1: "Talk to a consultant.",
    intro:
      "Tell us about your business and we'll come back with a clear next step — usually within one business day.",
    form: {
      name: "Full name",
      business: "Business name",
      email: "Email address",
      phone: "Phone number",
      revenueLabel: "Approximate annual revenue",
      message: "Anything else we should know?",
      submit: "Send message",
      submitting: "Sending…",
    },
    success: "Thanks — that's landed with our team. We'll be in touch within one business day.",
    error: "Something went wrong sending that. Please try again, or email us directly.",
    directEmail: "hello@coreholdsolutions.com",
  },

  privacy: {
    eyebrow: "Privacy Policy",
    h1: "Privacy Policy",
    updated: "Last updated: 1 September 2026",
    body: [
      "This is a plain-language summary. It is not a substitute for formal legal review before launch — have counsel confirm this against UAE data protection law before this page is treated as final.",
      "What we collect: when you use the readiness calculator or contact form, we collect the business and contact details you provide — business name, contact name, email, phone number, revenue band, current invoicing method, and your calculated deadline.",
      "Why we collect it: to respond to your enquiry, to send you the results you asked for, and to follow up about CHS services. We do not sell your data.",
      "Where it's stored: your submission is stored in our lead database and is accessible to CoreholdSolutions staff for the purpose of following up with you.",
      "Your rights: you can ask us to access, correct, or delete your information at any time by emailing hello@coreholdsolutions.com.",
    ],
  },

  terms: {
    eyebrow: "Terms of Service",
    h1: "Terms of Service",
    updated: "Last updated: 1 September 2026",
    body: [
      "This is a plain-language starting point. It is not a substitute for formal legal review before launch — have counsel confirm this before this page is treated as final.",
      "CoreholdSolutions provides integration, implementation, and advisory services related to UAE e-invoicing compliance. CoreholdSolutions is not itself an FTA-Accredited Service Provider.",
      "Nothing on this site constitutes tax or legal advice. Your specific obligations under Federal Decree-Law No. 16 of 2024 and its associated Ministerial Decisions should be confirmed with the Federal Tax Authority or your own tax advisor.",
      "Pricing shown on this site is indicative and subject to confirmation for your specific engagement.",
      "Subscription services are billed monthly and may be cancelled in line with the notice period in your service agreement.",
    ],
  },

  admin: {
    title: "Leads",
    passwordLabel: "Admin password",
    submit: "View leads",
    error: "Incorrect password.",
    empty: "No leads yet.",
    columns: {
      date: "Date",
      source: "Source",
      business: "Business",
      contact: "Contact",
      revenue: "Revenue band",
      method: "Invoicing method",
      deadline: "Deadline",
      emailStatus: "Email",
    },
  },

  common: {
    requiredField: "This field is required.",
    invalidEmail: "Enter a valid email address.",
    skipToContent: "Skip to content",
  },
};

export default en;
export type Dictionary = typeof en;
