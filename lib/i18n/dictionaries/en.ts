// English content dictionary.
// This is the single source of truth for every string on the English side of
// the site. The Arabic dictionary (ar.ts) mirrors this shape exactly.

const en = {
  meta: {
    siteName: "CoreholdSolutions",
    shortName: "CHS",
    tagline: "UAE e-invoicing compliance, end to end.",
    ogDescription:
      "CoreholdSolutions is the client-side e-invoicing implementation and compliance partner for UAE businesses — we establish what the law requires of your business, choose and negotiate your accredited provider, build and prove the integration, and stay accountable for it after go-live.",
  },

  nav: {
    home: "Home",
    howItWorks: "How It Works",
    services: "Services",
    readiness: "Readiness Assessment",
    implementation: "Implementation",
    managed: "Managed Compliance",
    industries: "Industries",
    erp: "Your System",
    partners: "For Partners",
    pricing: "Pricing",
    glossary: "Glossary & FAQ",
    about: "About",
    contact: "Contact",
    insights: "Insights",
    checkDeadline: "Check your deadline",
    languageSwitch: "العربية",
    languageSwitchAria: "Switch to Arabic",
  },

  footer: {
    companyFull: "CoreholdSolutions",
    companyFullAr: "كورهولد سوليوشنز",
    description:
      "Client-side e-invoicing implementation and compliance for UAE businesses — advisory, accredited-provider selection, integration and managed operations, under one accountable team. Not an accredited service provider itself.",
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
    h1: "Every business in the UAE has an e-invoicing deadline. Very few have a plan.",
    subhead:
      "CoreholdSolutions assesses, selects, implements and operates e-invoicing for UAE businesses. Federal law now puts every VAT-registered business on a fixed timeline to invoice through an accredited provider, and every provider you speak to will recommend its own platform. We work on your side of that decision: establishing what the law requires of you specifically, choosing the right provider for the systems you already run, building and proving the connection, and staying accountable for it after go-live.",
    ctaPrimary: "Find your deadline",
    ctaSecondary: "How we work",
    trustLine: "Client-side, not vendor-side · Advisory, provider selection, integration and managed operations under one accountable team",
    scrollCue: "Scroll",
    questionsHeading: "The three questions we answer for you",
    questions: [
      {
        n: "01",
        q: "What does the law actually require of us?",
        a: "Your revenue tier, your dates, your entity structure and your exposure — established formally, in writing, not estimated.",
      },
      {
        n: "02",
        q: "Which accredited provider should we appoint?",
        a: "Scored against your requirements by an advisor holding no reseller margin with any of them.",
      },
      {
        n: "03",
        q: "Which systems should we run, and how do they connect?",
        a: "An honest architecture answer — including the cases where your current setup is already the right one.",
      },
    ],
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
        body: "Once you're live, your accredited provider transmits and receives the invoices. We watch that it is working: monitoring what goes out and comes back, catching rejections before they age into a filing problem, reconciling against your own books each month, and dealing with the provider when something needs fixing. You keep invoicing the way you already do.",
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

  explainer: {
    eyebrow: "First, the plain version",
    h2: "What e-invoicing actually is, in one diagram.",
    intro:
      "Most explanations of this start with the vocabulary. Here is the one that starts with your invoice. Today you send a PDF and hope it gets paid. Under the mandate, your system sends structured data to an accredited provider, that provider delivers it to your customer's provider, and the tax authority receives a report of the transaction. Five parties. You are directly responsible for one of them — and for choosing the second.",
    nodes: [
      {
        n: "1",
        title: "Your system",
        body: "QuickBooks, Zoho, Xero, SAP, Oracle — or a spreadsheet. The invoice still starts here, the way it always has.",
      },
      {
        n: "2",
        title: "Your accredited provider",
        body: "Converts your invoice into the required format and transmits it. Appointing one is a legal obligation with a fixed deadline, not a software preference.",
      },
      {
        n: "3",
        title: "Your customer's provider",
        body: "Receives the invoice on their behalf across the network. Nothing here is yours to manage.",
      },
      {
        n: "4",
        title: "Your customer's system",
        body: "The invoice lands as structured data their software can read and process without anyone retyping it.",
      },
    ],
    fifth: {
      n: "5",
      title: "The Federal Tax Authority",
      body: "Receives reporting data on the transaction. This is the corner that makes e-invoicing a tax obligation rather than a convenience — and the reason getting the first two right matters.",
    },
    scopeLabel: "Where CoreholdSolutions works",
    scopeBody:
      "Corners 1 and 2, and everything behind them: deciding what you actually need, selecting and appointing the provider, mapping and testing the connection, then monitoring it every month after go-live. Corners 3, 4 and 5 are handled by the network and the accredited providers on it — which is why getting the first two right is the part that decides whether the rest goes smoothly.",
    jargonNote:
      "Peppol is the network this travels over. PINT-AE is the required data format. You will never have to touch either — but they are what the acronyms in every vendor deck are referring to, and you should not have to pretend to recognise them.",
    cta: "See every term explained",
  },

  guidance: {
    eyebrow: "The two decisions",
    h2: "Which provider. Which systems. These are the decisions that cost money later.",
    intro:
      "Nearly everything else in this project is execution — difficult, but knowable. These two are judgement calls, made once, early, usually with incomplete information and a vendor in the room. This is how we make them.",
    provider: {
      title: "Choosing your accredited provider",
      lead: "We score the accredited options against your requirements before you sit in a single demo. The criteria that actually predict whether you will still be happy in eighteen months:",
      criteria: [
        {
          title: "Depth of integration with your actual stack",
          body: "Not “supports SAP” — supports your SAP, with your customisations, your entity structure and your document types.",
        },
        {
          title: "Behaviour when something fails at month-end",
          body: "The single best predictor of a good provider, and the one question nobody thinks to ask during a sales call.",
        },
        {
          title: "Commercial model as your volume grows",
          body: "Per-invoice pricing that looks cheap at 100 invoices a month can be the most expensive option on the table at 2,000.",
        },
        {
          title: "Support in Arabic and English, in UAE hours",
          body: "A support desk eight time zones away is a materially different product from the one demonstrated to you.",
        },
        {
          title: "Financial stability and roadmap",
          body: "You are appointing this provider against a legal obligation that does not expire. Their solvency quietly becomes your problem.",
        },
      ],
      close:
        "We hold no reseller margin with any provider, so the recommendation you receive is the one we would act on ourselves.",
    },
    systems: {
      title: "Choosing your systems",
      lead: "Your current setup decides most of the effort. Here is what each starting point genuinely means — including the cases where the right answer is to change nothing at all.",
      rows: [
        {
          system: "QuickBooks, Zoho or Xero",
          effort: "Shortest path",
          body: "Standard integration routes exist. Usually no platform change is needed, and we would tell you to keep what you have.",
        },
        {
          system: "SAP or Oracle",
          effort: "Deeper scoping",
          body: "The mapping is well understood, but multi-entity structures and customisations need proper design before anyone writes an integration.",
        },
        {
          system: "Custom or in-house",
          effort: "Assessment first",
          body: "Entirely dependent on data quality and how invoice records are structured. Establishing that is what the first technical session is for.",
        },
        {
          system: "Spreadsheets or manual",
          effort: "Start earliest",
          body: "The real project is moving onto a connected system. That is a larger change than the compliance work itself — which is precisely why it cannot be left late.",
        },
      ],
      close:
        "We are not resellers of any accounting platform either. If your current system is adequate, keeping it is the cheapest correct answer, and we will say so.",
    },
  },

  problem: {
    eyebrow: "Why this goes wrong",
    h2: "Nobody drowns in the technology. They drown in everything around it.",
    intro:
      "The UAE's e-invoicing mandate is not, on its own, a hard engineering problem. Businesses miss it anyway — and they miss it for the same four reasons, every time.",
    points: [
      {
        n: "01",
        title: "A vocabulary nobody was hired for",
        body: "Peppol. PINT-AE. UBL XML. The five-corner model. None of it was in anyone's job description eighteen months ago, and all of it is now load-bearing. Teams lose weeks working out what is even being asked of them.",
      },
      {
        n: "02",
        title: "Vendors who all reach the same conclusion",
        body: "Ask five providers to assess you and you will get five assessments that end with their own platform. None of them are lying. None of them are neutral either — and telling those two apart is not a fair thing to ask of a finance team already under a deadline.",
      },
      {
        n: "03",
        title: "A date that does not negotiate",
        body: "Appointment deadlines and go-live dates are fixed in law and set by revenue band. There is no extension to apply for, no phased grace period to lean on, and no version of this where being late is quietly fine.",
      },
      {
        n: "04",
        title: "An owner who does not exist",
        body: "Finance assumes IT has it. IT assumes finance has it. It surfaces as a real problem roughly ninety days out — at precisely the point where every remaining option is the expensive one.",
      },
    ],
    closing: "We take all four of those off your desk. That is the entire job.",
  },

  scenarios: {
    eyebrow: "Where you are right now",
    h2: "Four situations. All of them are ones we work with.",
    intro:
      "Most businesses assume this is a single project with a single starting point. It isn't. People reach us at very different stages, and the useful next step is different for each one.",
    items: [
      {
        n: "01",
        situation: "We haven't started.",
        response: "Then start with what you actually owe.",
        body: "Before anyone shows you a platform, you need your revenue tier, your dates, your entity structure and an honest read on how much work your current systems imply. That is a short, defined piece of work, and it is what the readiness assessment exists for.",
        next: "Start with a readiness assessment",
      },
      {
        n: "02",
        situation: "We've already chosen a provider.",
        response: "Good. That was the easier half.",
        body: "Choosing a provider does not integrate anything. Your invoice data still has to map correctly into PINT-AE, validate against real cases, survive testing, and cut over without breaking month-end. We work with whichever accredited provider you have appointed, and we are not going to suggest you unpick that decision.",
        next: "Talk about implementation",
      },
      {
        n: "03",
        situation: "We're mid-implementation and stuck.",
        response: "Usually it is the mapping, not the provider.",
        body: "Stalled implementations tend to fail in the same few places: invoice fields that do not map cleanly, entity structures nobody scoped, validation errors that keep recurring, and no single person who owns the outcome across finance, IT and the provider. We come in at that point more often than at the start.",
        next: "Get an outside read on it",
      },
      {
        n: "04",
        situation: "We're already live, but it's not clean.",
        response: "Then the problem is operations, not compliance.",
        body: "Being live is not the same as being stable. Rejections that nobody resolves, reconciliation that never quite matches, a provider relationship nobody manages, and no clarity on who fixes it when it breaks at month-end. That is exactly what managed operations is for.",
        next: "Talk about managed operations",
      },
    ],
    closing:
      "If none of these describes you, the first conversation is free and short, and it usually ends with a clear answer either way.",
  },

  segments: {
    industry: {
      eyebrow: "By industry",
      h1: "The mandate is the same. The work is not.",
      intro:
        "The regulation applies uniformly, but what it costs you to comply depends almost entirely on how your business invoices. These are the categories where that difference is largest, and what it means in each.",
      readMore: "Read the detail",
      alsoHeading: "Other industries",
      note:
        "These describe the patterns we see in each category. Your own environment is established during assessment, not assumed from your sector.",
    },
    erp: {
      eyebrow: "By system",
      h1: "You probably do not need to replace your accounting system.",
      intro:
        "The most expensive mistake in this whole exercise is a platform migration nobody required. In most cases the system you already run can meet the requirement. Here is what the mandate actually means for each of the common ones.",
      readMore: "Read the detail",
      alsoHeading: "Other systems",
      note:
        "We do not resell any accounting platform and we do not sell pre-built integrations. Where a provider advertises support for your system, we test whether it fits your configuration rather than accepting the claim.",
    },
  },

  offload: {
    eyebrow: "What comes off your desk",
    h2: "You do not have to work this out on your own.",
    intro:
      "Below is the list of questions this project puts in front of a finance team, and who answers each one once we are engaged. Nothing here is a promise about the parts we do not control.",
    rows: [
      { q: "Which accredited provider should we appoint?", a: "We define your requirements first, then score the accredited options against them and sit on your side of the commercial conversation." },
      { q: "Do we have to change our accounting or ERP system?", a: "We assess your current environment and tell you honestly. In most cases the answer is no, and we would rather say so than sell a migration." },
      { q: "How does our invoice data map to the required format?", a: "We do the mapping, including the fields your system does not currently capture, and validate it before it reaches production." },
      { q: "Who runs the testing?", a: "We do, against real invoice cases including the ones built to fail, and we coordinate the provider's side of it." },
      { q: "Who owns the project across finance, IT and the provider?", a: "One named project owner at CHS, with a plan, a task list and an issue log you can see." },
      { q: "What happens when an invoice is rejected after go-live?", a: "We find it, diagnose it and resolve it, and raise it with your provider where the fix sits on their side." },
      { q: "Who keeps track when the rules change?", a: "We do, and we tell you what it means for your setup specifically rather than forwarding you a circular." },
    ],
    closing:
      "What stays with you: your systems, your data, your commercial relationship with the provider, and the decisions only you can make. We do not sign your contracts or file your returns.",
    cta: "Check your readiness",
  },

  partnersPage: {
    eyebrow: "For partners",
    h1: "We handle the part of e-invoicing that sits on the client's side.",
    intro:
      "CoreholdSolutions works alongside three groups who each already own a relationship we have no interest in taking: accounting and tax firms, accredited service providers, and the ERP and IT consultants who keep client systems running. What we add is the client-side implementation work in between.",
    accounting: {
      eyebrow: "Accounting and tax firms",
      h2: "You manage the books. We manage the e-invoicing transition.",
      body: "Your clients are asking you about e-invoicing because you are who they ask about anything with a tax deadline attached. Most of what they actually need next is systems work — mapping invoice data into a structured format, coordinating an accredited provider, testing, and keeping it running after go-live. That is not accounting work, and staffing for it is rarely worth it for a single client.",
      points: [
        { t: "We do not touch the accounting relationship", b: "We are not a bookkeeping, audit or tax practice, and we are not going to become one. The ledger stays yours." },
        { t: "Your client gets a defined piece of work", b: "A readiness assessment establishes their position, and we scope any implementation from there rather than open-ended consulting." },
        { t: "You stay informed", b: "You see the compliance position we establish and the roadmap we produce, because it affects the returns you file." },
        { t: "Referral arrangements are agreed in writing", b: "Terms are discussed directly and documented. We are not going to publish a commission rate on a web page." },
      ],
      cta: "Talk about a referral arrangement",
    },
    asp: {
      eyebrow: "Accredited service providers",
      h2: "The client-side implementation layer you would otherwise staff.",
      body: "Accreditation is a capital, insurance and certification undertaking. What it does not automatically produce is a delivery organisation able to sit with a mid-market finance team for six weeks mapping their invoice data. That work is expensive to staff, hard to scale, and it is the work we do.",
      points: [
        { t: "Clients arrive scoped, not raw", b: "Requirements defined, systems assessed, data problems identified before onboarding starts, so your team is not discovering them mid-integration." },
        { t: "We work with more than one provider", b: "Deliberately. It is what makes a recommendation from us worth something to a client, and it means we are not a dependency risk for you either." },
        { t: "Bilingual delivery on the ground", b: "English and Arabic, in the room with UAE finance teams." },
        { t: "We stay after go-live", b: "Which means fewer support tickets reaching you that are actually client-side data issues." },
      ],
      boundary:
        "To be unambiguous: CoreholdSolutions is not an accredited service provider and does not perform accredited provider functions. We work on the client side of that boundary.",
      cta: "Discuss a partnership",
    },
    tech: {
      eyebrow: "ERP and IT consultants",
      h2: "You own the system. We own the compliance layer on top of it.",
      body: "If you maintain a client's SAP, Oracle or mid-market ERP, e-invoicing arrives as a request you did not ask for, with a regulatory deadline attached and a specification nobody has written yet. We write that specification, coordinate the provider, and hand your team defined work rather than an open-ended obligation.",
      points: [
        { t: "We do not compete for the ERP relationship", b: "We are not going to propose a migration or position ourselves as your replacement." },
        { t: "You get a specification, not a conversation", b: "Field-level mapping requirements and test cases, so the work can be estimated properly." },
        { t: "We respect your change control", b: "Release cycles and test environments exist for a reason. We work inside them." },
      ],
      cta: "Talk about working together",
    },
    closing: {
      h2: "What a partner conversation actually looks like",
      body: "A short call to establish whether there is real overlap, then a written note of what each side would do and how referrals would work. We are a young firm and we would rather agree something narrow that works than sign a broad arrangement neither side uses.",
      cta: "Start a partner conversation",
    },
  },

  services: {
    boundary: {
      eyebrow: "Where the line sits",
      h2: "What we do. What your accredited provider does.",
      intro:
        "This is the question every prospect eventually asks, usually three conversations in: if I already have an accredited provider, what is left for you to do? The honest answer is that appointing a provider settles one decision out of a project with many. Here is the split.",
      layers: [
        {
          label: "Your business",
          title: "What stays yours",
          items: [
            "Your ERP or accounting system",
            "Your finance team and their workflow",
            "Your invoice data and customer records",
            "The commercial relationship with your provider",
          ],
        },
        {
          label: "CoreholdSolutions",
          title: "What we take on",
          items: [
            "Establishing what the regulation requires of your business specifically",
            "Defining requirements before any provider conversation",
            "Scoring and selecting the accredited provider that fits your systems",
            "Mapping your invoice data into the required structured format",
            "Coordinating the integration with your provider and your IT side",
            "Testing, including the cases designed to fail",
            "Go-live planning and staged cutover",
            "Monitoring, rejection resolution and reconciliation after go-live",
          ],
        },
        {
          label: "Your accredited provider",
          title: "What only they can do",
          items: [
            "Transmitting your invoices across the network",
            "Receiving invoices addressed to you",
            "The reporting leg to the Federal Tax Authority",
            "Everything the accreditation itself authorises",
          ],
        },
      ],
      note:
        "We are not an accredited service provider and do not perform any of the functions in the third column. That separation is deliberate: it is what allows us to advise on which provider you should appoint without a commercial answer waiting at the end of it.",
      answer: {
        q: "So why do I need you if I already have a provider?",
        a: "Because choosing a provider is a procurement decision, and what follows it is an integration project. Your invoice data still has to map correctly, validate against real cases, survive testing, and cut over without breaking month-end — and somebody has to own that across finance, IT and the provider. That is the work.",
      },
    },

    readiness: {
      eyebrow: "Readiness assessment",
      h1: "Know what your business actually needs before you sit in a single vendor demo.",
      lede:
        "A defined piece of professional work, not a discovery call in disguise. We establish your position formally — what the regulation requires of you, what your current systems imply, what it will genuinely cost, and what the sequence of work is. You end up able to run a provider conversation on your terms instead of theirs.",
      forWhomTitle: "Who this is for",
      forWhom: [
        "Businesses that have not started, and want a plan before a purchase",
        "Finance teams being asked by their board what the exposure is",
        "Anyone who has sat through provider demos and come away less certain than before",
        "Groups with multiple entities or VAT registrations, where the scoping is not obvious",
      ],
      reviewTitle: "What we review",
      review: [
        "Revenue tier, entity structure and VAT groupings, against the published schedule",
        "Your current accounting or ERP environment and how invoice data is actually held in it",
        "Invoice volume, document types and the transactions that turn out to be edge cases",
        "Existing integrations, and what will and will not survive the change",
        "Where your invoice data is incomplete or inconsistent today, because that surfaces during testing either way",
      ],
      answersTitle: "The questions you get answered",
      answers: [
        "Which deadline applies to us, and to which entities",
        "What is our realistic exposure if we are late",
        "Do we need to change our accounting or ERP system, or not",
        "What kind of provider do we actually need, and which ones fit",
        "How long will implementation take, and what will it cost",
        "Who inside our business needs to own this, and how much of their time it takes",
      ],
      deliverTitle: "What you receive",
      deliver: [
        "A written compliance position you can hand to your board, auditor or group finance function",
        "A dated roadmap with named owners, not a list of recommendations",
        "A scored provider shortlist matched to your systems and volume",
        "An implementation estimate with the assumptions shown",
      ],
      metaDuration: "Typically 2 to 3 weeks",
      metaPrice: "From AED 6,500",
      metaPriceNote: "Scoped to your entity structure",
      metaFormat: "Two working sessions, one written deliverable",
      afterTitle: "What happens after",
      afterBody:
        "You own the deliverable either way. If you want us to run the implementation, the assessment fee is credited against it. If you want to take the plan to someone else, or run it internally, that is a legitimate outcome and we would rather you do that than buy work you do not need.",
      keepTitle: "And if your current setup is already fine",
      keepBody:
        "Then that is what the report says. The most expensive mistake we see is a platform migration nobody was required to make, sold on the back of a regulation that did not ask for it. If your existing environment can meet the requirement, keeping it is the cheapest correct answer.",
      cta: "Book a readiness assessment",
      ctaSecondary: "See how an engagement runs",
    },

    implementation: {
      eyebrow: "Implementation",
      h1: "Choosing a provider is a decision. Getting it working is a project.",
      lede:
        "Most of what goes wrong in e-invoicing happens after the provider is appointed, in the gap between a signed contract and a system that actually transmits clean invoices at month-end. We run that middle, whether you appointed your provider through us or before you had ever heard of us.",
      stagesTitle: "How the work runs",
      stages: [
        { n: "01", t: "Discovery and current-state review", b: "Your systems, your invoice data, your document types, and the people who will have to live with the result." },
        { n: "02", t: "Requirements definition", b: "What the connection has to do, written down before anyone builds anything, so the provider is held to a specification rather than a conversation." },
        { n: "03", t: "Architecture and data mapping", b: "Your invoice fields mapped into the required structured format, including the fields your system does not currently capture — which is usually where the real work is." },
        { n: "04", t: "Provider coordination", b: "We sit between your team and your provider's onboarding process, in their technical language and yours, so your finance team is not translating." },
        { n: "05", t: "Integration and validation", b: "Building and proving the connection, then validating against real invoice cases including the ones constructed to fail." },
        { n: "06", t: "User acceptance testing", b: "Your team confirms it works the way they actually invoice, not the way the process diagram says they do." },
        { n: "07", t: "Go-live and staged cutover", b: "In stages, with a rollback position, rather than a single overnight switch across every entity." },
        { n: "08", t: "Stabilisation", b: "The first full month-end after go-live is the real test. We stay through it." },
      ],
      alreadyTitle: "Already appointed a provider?",
      alreadyBody:
        "That is a normal starting point and it changes nothing about how we work. We are not going to reopen a decision you have already made and paid for. We work with whichever accredited provider you have appointed, take the specification from there, and get the integration done.",
      erpTitle: "Already have an ERP?",
      erpBody:
        "Having an ERP is not the same as having a completed e-invoicing implementation. Most systems can be made to work; the question is what has to be configured, mapped, tested and changed operationally to get there — and that answer is specific to your instance, not to the product name.",
      accountantTitle: "Already have an accountant?",
      accountantBody:
        "Keep them. Your accountant handles accounting and tax, and nothing here changes that. This is a systems integration project that happens to be driven by a tax regulation, and it needs a different kind of hands.",
      cta: "Talk about your implementation",
      ctaSecondary: "Start with an assessment instead",
    },

    managed: {
      eyebrow: "Managed compliance operations",
      h1: "Going live is the middle of this project. Not the end.",
      lede:
        "From go-live onward every invoice has to validate, transmit and reconcile, month after month, and the rules will change at least once. Managed operations is the service that keeps that working without it becoming somebody's unofficial second job inside your finance team.",
      includesTitle: "What we do each month",
      includes: [
        { t: "Transmission monitoring", b: "We watch what your provider sends and receives, and check it against what your system believed it issued." },
        { t: "Rejection resolution", b: "Rejections get found, diagnosed and resolved before they age into a filing problem. Most are data issues, not provider issues." },
        { t: "Reconciliation", b: "Monthly reconciliation between your ledger and what actually transmitted, so the two do not quietly drift apart." },
        { t: "Provider management", b: "When something needs raising with your provider, we raise it, in their format, and follow it to closure." },
        { t: "Regulatory change", b: "When the requirements move, we tell you what it means for your setup specifically and what we are changing." },
        { t: "Operational reporting", b: "A monthly position you can put in front of an auditor without assembling it first." },
      ],
      boundaryNote:
        "To be precise about the split: your accredited provider performs the transmission and the reporting to the Federal Tax Authority. We monitor it, resolve what breaks on your side, reconcile it against your books, and manage the relationship with them. We do not perform any regulated provider function.",
      forWhomTitle: "This is worth it if",
      forWhom: [
        "Nobody in your finance team currently owns e-invoicing operations, and it shows at month-end",
        "You are seeing rejections and nobody is systematically resolving them",
        "Your reconciliation between ledger and transmitted invoices does not reliably match",
        "You have multiple entities and no consolidated view of whether they are all working",
        "You went live with an implementation partner who has since disappeared",
      ],
      liveTitle: "Already live, and it is not clean?",
      liveBody:
        "That is a common starting point and it is a different piece of work from an implementation. We review your current environment, identify what is actually failing, fix it, and then take it on operationally if that is useful. Being live is not the same as being stable.",
      cta: "Review our current setup",
      ctaSecondary: "See pricing",
    },
  },

  pillars: {
    eyebrow: "What we do",
    h2: "Four disciplines. One accountable team.",
    intro:
      "Compliance programmes fail at the handoffs — between the advisor who scoped it, the vendor who sold it, and the integrator who built it. Each is holding a piece; none is holding the outcome. We don't hand off.",
    items: [
      {
        n: "01",
        title: "Compliance advisory",
        summary: "Establishing precisely what the law requires of your business — not of businesses in general.",
        body: "Your revenue tier, entity structure, VAT groupings and transaction types decide your obligations and your dates. We establish them formally and give you a written position you can hand to your board, your auditor, or your group finance function.",
        detail: [
          "Revenue-tier and deadline determination",
          "Multi-entity and VAT-group scoping",
          "Obligation and penalty-exposure assessment",
          "A dated compliance roadmap with named owners",
        ],
      },
      {
        n: "02",
        title: "Accredited-provider selection",
        summary: "Choosing the provider that fits your business, and negotiating the terms you sign.",
        body: "Accredited providers are not interchangeable. They differ on integration depth, on coverage, on commercial model, and — the thing that matters most and gets asked about least — on how they behave when something breaks at month-end. We run a structured evaluation against your requirements, then sit on your side of the negotiation.",
        detail: [
          "Requirements defined before any vendor conversation",
          "Structured, scored provider evaluation",
          "Commercial and contract review",
          "We manage the provider relationship after signature",
        ],
      },
      {
        n: "03",
        title: "Systems architecture & integration",
        summary: "Deciding what should be connected — then building and proving the connection.",
        body: "Before anything is integrated, someone has to ask whether the system you are on is the system you should stay on. We answer that honestly, including when the answer is that your current setup is perfectly fine. Then we build: invoice data mapped into PINT-AE, validated, tested end to end, and cut over in stages rather than overnight.",
        detail: [
          "Current-state systems and data review",
          "ERP and accounting platform advisory",
          "PINT-AE / UBL XML data mapping",
          "End-to-end validation and failure testing",
          "Staged cutover and team enablement",
        ],
      },
      {
        n: "04",
        title: "Managed compliance operations",
        summary: "Running it after go-live, which is where compliance is actually won or lost.",
        body: "Going live is the middle of this project, not the end. From that day every invoice has to validate, transmit and reconcile — and the rules will change at least once. We monitor transmission, resolve rejections before they age into a filing problem, reconcile to your ledger monthly, and absorb regulatory change so your team doesn't have to track it.",
        detail: [
          "Transmission and acceptance monitoring",
          "Rejection resolution before it ages",
          "Monthly reconciliation against your ledger",
          "Regulatory change management",
        ],
      },
    ],
    cta: "See how an engagement runs",
  },

  independence: {
    eyebrow: "Where we sit",
    h2: "On your side of the table.",
    body: "CoreholdSolutions is not an accredited service provider. We work alongside the accredited network rather than competing with it, and we represent the client's side of the table when a provider is being chosen. An accredited provider recommending an accredited provider is a sales call. We hold no reseller margin on any provider we currently recommend, so when we tell you one is the right fit, the only thing riding on it is whether we were right. If that ever changes — if we enter a commercial arrangement with a named provider — this page will say so before you have to ask.",
    factsHeading: "What accreditation actually demands",
    facts: [
      "Proof of paid-up capital and professional indemnity insurance",
      "ISO/IEC 27001 and ISO 22301 certification",
      "Active Peppol certification and a passed conformance test",
      "Two years of documented e-invoicing operating experience",
      "A 90-working-day accreditation process",
    ],
    factsNote:
      "Requirements are set by the Ministry of Finance and are summarised here, not quoted in full — confirm the current criteria directly with the Ministry. It is a serious bar, and it is why the accredited network is small and worth choosing carefully.",
  },

  numbers: {
    eyebrow: "The regulation, in figures",
    h2: "None of these are our numbers. All of them are your deadline.",
    items: [
      {
        value: 16,
        prefix: "No. ",
        suffix: "",
        // Never animated: counting up to a statute number would briefly
        // display "No. 12", "No. 14" — incorrect legal citations on the
        // site of a compliance firm.
        animate: false,
        label: "Federal Decree-Law of 2024",
        body: "The law that placed every VAT-registered business in the UAE on this timeline.",
      },
      {
        value: 50,
        prefix: "AED ",
        suffix: "M",
        animate: true,
        label: "The line that decides your dates",
        body: "At or above it, you are on the large-business track. Below it, the standard track.",
      },
      {
        value: 5,
        prefix: "",
        suffix: "",
        animate: true,
        label: "Corners in the model",
        body: "Your system, your provider, their provider, your customer — and the tax authority.",
      },
      {
        value: 4,
        prefix: "",
        suffix: "",
        animate: true,
        label: "Fixed dates in the schedule",
        body: "Two provider-appointment deadlines and two go-live dates. None of them move.",
      },
    ],
    note:
      "Figures reflect Federal Decree-Law No. 16 of 2024 and Ministerial Decisions No. 243 and 244 of 2025. Confirm your own position with the Federal Tax Authority or your tax advisor.",
  },

  path: {
    eyebrow: "The engagement",
    h2: "Assess. Select. Implement. Operate.",
    intro:
      "Four stages, in order, each ending in something concrete handed over. It is the same method whether you are starting from nothing or joining us halfway through a stalled project, and you always know which stage you are in and what you are waiting for.",
    stages: [
      {
        n: "01",
        label: "Assess",
        title: "We establish your actual position.",
        body: "Revenue tier, entity structure, current systems, transaction types — and the dates that follow from them. This is the stage where guessing gets eliminated, including ours.",
        outcome: "You receive: a written compliance position and a dated roadmap.",
      },
      {
        n: "02",
        label: "Select",
        title: "We choose your accredited provider with you.",
        body: "Requirements first, vendors second. We score the accredited options against what your business actually needs, bring you a recommendation with the reasoning shown, and negotiate commercial terms alongside you.",
        outcome: "You receive: a scored evaluation, a recommendation, and reviewed contract terms.",
      },
      {
        n: "03",
        label: "Implement",
        title: "We architect and prove the connection.",
        body: "Your invoice data mapped into the required structured format, validated against real cases including the ones designed to fail, then cut over in stages. Your team is trained on the small number of things that genuinely change for them.",
        outcome: "You receive: a tested, live connection and a documented cutover.",
      },
      {
        n: "04",
        label: "Operate",
        title: "We run it, and keep running it.",
        body: "Monitoring, rejection resolution, monthly reconciliation, and absorbing regulatory change as it lands. This is the stage that never ends, which is why we price it separately and say so plainly.",
        outcome: "You receive: monthly reconciliation and a compliance record that holds up.",
      },
    ],
    stageLabel: "Stage",
  },

  partners: {
    eyebrow: "For accredited providers",
    h2: "The implementation layer you would otherwise have to staff.",
    body: "Accreditation is a capital, insurance and certification undertaking. What it is not is a delivery organisation. Providers are winning UAE mandates faster than they can hire integration consultants able to hold a conversation about SAP field mapping and a spreadsheet-based invoicing process in the same week, in Arabic and in English. That is the work we do — and we are glad to do it under your name.",
    points: [
      {
        title: "Client-side delivery, to your standard",
        body: "We implement against your onboarding specification and hand back a client who is live and stable, not a ticket queue.",
      },
      {
        title: "SME volume without burning senior engineers",
        body: "The long tail of smaller mandates is where provider margin quietly disappears. For us it is routine work.",
      },
      {
        title: "Bilingual delivery on the ground",
        body: "English and Arabic, with UAE finance teams, in the room where it matters.",
      },
      {
        title: "Neutral by design",
        body: "We recommend on fit and we work with more than one provider. That independence is precisely what makes a referral from us worth having.",
      },
    ],
    cta: "Talk about a partnership",
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
    h1: "Two things you pay for: getting it built, and keeping it working.",
    intro:
      "A one-time implementation to get your systems connected and proven, then a monthly service that keeps it working after go-live. The figures below are starting points, not fixed prices — what you actually pay depends on your entity structure, your systems and your invoice volume, and we scope it properly before quoting.",
    placeholderNotice:
      "Pricing shown is indicative and subject to confirmation on a scoping call.",
    getCompliant: {
      title: "Get Compliant",
      subtitle: "One-time integration & implementation",
      tiers: [
        {
          name: "Starter",
          forWhom: "Single entity, QuickBooks / Zoho / Xero, or spreadsheet-based",
          price: "From AED 9,500",
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
          price: "From AED 22,000",
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
          forWhom: "Single entity, standard invoice volume",
          price: "From AED 1,500",
          priceNote: "per month",
          features: [
            "Monitoring of every invoice your provider transmits",
            "Sent and received e-invoice reporting",
            "Rejections caught and raised before they age",
            "Monthly reconciliation against your ledger",
            "Regulatory changes tracked on your behalf",
          ],
        },
        {
          name: "Professional",
          forWhom: "Higher volume, or more than one entity",
          price: "From AED 3,500",
          priceNote: "per month",
          features: [
            "Everything in Essential",
            "Active rejection resolution, not just flagging",
            "Multi-entity monitoring",
            "Quarterly compliance review",
            "Named contact, one-business-day response",
          ],
        },
        {
          name: "Enterprise",
          forWhom: "Group structures, high volume, custom SLA",
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
    h1: "A consultancy built around one regulation, and everything it touches.",
    intro:
      "CoreholdSolutions is an independent advisory, architecture and implementation firm working on a single problem: getting UAE businesses compliant with mandatory e-invoicing, and keeping them there. We are deliberately specialised. A regulation with fixed dates, real financial exposure and a genuinely technical middle is not something to advise on part-time.",
    principlesHeading: "How we work",
    principles: [
      {
        title: "We tell you what you don't need.",
        body: "The fastest way to waste money here is to buy a platform migration you were never required to make. If your current system is fine, we will say so — and it costs you one scoping call to find out.",
      },
      {
        title: "We put dates on things.",
        body: "Every commitment we make carries a date and a named owner. A roadmap without dates is a document, not a plan, and it will not survive contact with a deadline set in law.",
      },
      {
        title: "We stay past go-live.",
        body: "Anyone can sell you an integration. The real test is the first month-end after launch, when an invoice is rejected and nobody can say why. That is the moment we built this firm for.",
      },
      {
        title: "We say what we are not.",
        body: "We are not an accredited provider. We hold no reseller margin today, and if that ever changes we will publish it rather than let you find out. Everything we do claim, we can stand behind — and we would rather be accurate than impressive.",
      },
    ],
    honesty: {
      title: "Where we stand on accreditation",
      body: "Accreditation as a service provider is a substantial undertaking: paid-up capital and professional indemnity insurance, ISO/IEC 27001 and ISO 22301 certification, active Peppol certification, two years of documented e-invoicing operating experience, and a 90-working-day assessment by the Ministry of Finance. CoreholdSolutions is not an accredited service provider. Our clients are connected through accredited providers, and our job is to make sure the right one is chosen and the connection actually works. We are deliberately building the technical and operational depth this work demands, and where that leads over time is a decision for later — we will not describe a future capability as though we already hold it.",
    },
    teamHeading: "Who you'll work with",
    team: {
      ghassan: {
        name: "Ghassan Adil",
        title: "Founder & Principal Consultant",
        bio: "Ghassan founded CoreholdSolutions on a straightforward observation: the UAE's e-invoicing mandate is not especially difficult, and businesses are going to miss it anyway — because it arrives as policy language rather than as a plan with dates and an owner. He built the firm to be that owner. As principal consultant he leads the assessment stage of every engagement personally: establishing what the law actually requires of that specific business, what meeting it will genuinely cost, and what the honest sequence of work is when the deadline cannot move. He is deliberately the person clients reach when something is difficult, not only when it is being sold.",
      },
      amro: {
        name: "Amro Idris",
        title: "Partner & Chief Solutions Architect",
        bio: "Amro owns the technical position on every CHS engagement — which systems a client should be running, how their invoice data maps into PINT-AE without failing validation, how the connection to an accredited provider is architected and proven, and what the cutover looks like on the day it happens. He sets the standard the firm is measured against, and it is a demanding one: an integration is not finished when it transmits successfully, it is finished when it has survived a full cycle of real invoices including the ones that fail. He works across the full range, from a single-entity Zoho setup to multi-entity SAP environments, and is the reason CHS will tell a client their current system is adequate when it is.",
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
        a: "An Accredited Service Provider is a company certified by the UAE government to transmit e-invoices on a business's behalf. Becoming one is a serious undertaking — the Ministry of Finance requires proof of paid-up capital and professional indemnity insurance, ISO/IEC 27001 and ISO 22301 certification, active Peppol certification with a passed conformance test, at least two years of documented experience operating an e-invoicing system, and a 90-working-day accreditation process. Most businesses don't become an ASP themselves; they connect their existing systems to one. CHS is not an ASP — we do the client-side work of choosing the right one and making the connection function.",
      },
      {
        q: "Is e-invoicing mandatory right now, or can I wait?",
        a: "E-invoicing isn't mandatory yet for any business — the mandatory dates start 1 January 2027 for large businesses and 1 July 2027 for everyone else. Voluntary adoption is open before then, with no penalty. The appointment deadlines (30 October 2026 for large businesses, 31 March 2027 for everyone else) are what actually force the timeline — leaving the integration work until close to your go-live date is what tends to create last-minute pressure.",
      },
      {
        q: "What happens if a business misses its deadline?",
        a: "The penalties are now published, in Cabinet Decision No. 106 of 2025. Failing to implement the system or appoint an accredited service provider by your deadline costs AED 5,000 for every month, or part of a month, that you remain non-compliant. Once you are past your go-live date, failing to transmit invoices costs a further AED 100 per invoice, capped at AED 5,000 a month, with the same again for credit notes. There are also three AED 1,000-per-day penalties covering late notification of system failures and of changes to your own data. How they apply in a specific case is the Federal Tax Authority's determination, not ours — but the figures themselves are no longer a guess.",
      },
      {
        q: "Does CHS issue my invoices for me?",
        a: "No — you keep creating and sending invoices the way you already do, through the accounting or ERP system your team already uses. What changes is what happens behind that: your system gets connected to an accredited provider, your invoice data gets automatically converted into the required structured format, and it gets transmitted and reported correctly. Your day-to-day invoicing process doesn't change; the plumbing behind it does.",
      },
      {
        q: "What accounting or ERP systems can CHS connect?",
        a: "We work across the systems most UAE businesses already use — QuickBooks, Zoho and Xero on the smaller end, SAP and Oracle for larger enterprises, and custom or spreadsheet-based setups for businesses that have not moved to dedicated software yet. To be precise about what that means: we do not sell a pre-built plugin for any of them. We assess your specific configuration, select and coordinate an accredited provider, and build and prove the connection. If you are not sure whether your setup can be connected, that is exactly what the first conversation is for.",
      },
      {
        q: "Is CHS itself an accredited service provider?",
        a: "No, and we want to be upfront about that. CHS is an independent consultancy: we establish what the law requires of your business, select and negotiate your accredited provider, architect and build the integration, and run it after go-live. We're not a certified ASP ourselves — and we hold no reseller margin with any of them, which is the entire reason our recommendation is worth anything.",
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
      qualifyHeading: "So the first call is useful",
      qualifyNote: "Optional, but it means we arrive already understanding your situation instead of spending the call establishing it.",
      industryLabel: "Industry",
      industryOptions: [
        { value: "", label: "Select…" },
        { value: "building_materials", label: "Building materials" },
        { value: "trading", label: "General trading" },
        { value: "distribution", label: "Distribution / wholesale" },
        { value: "logistics", label: "Logistics / freight" },
        { value: "manufacturing", label: "Manufacturing" },
        { value: "contracting", label: "Contracting / construction" },
        { value: "facilities", label: "Facilities / property management" },
        { value: "other", label: "Something else" },
      ],
      systemLabel: "Accounting or ERP system",
      systemOptions: [
        { value: "", label: "Select…" },
        { value: "quickbooks", label: "QuickBooks" },
        { value: "zoho", label: "Zoho" },
        { value: "xero", label: "Xero" },
        { value: "sap", label: "SAP" },
        { value: "oracle", label: "Oracle" },
        { value: "custom", label: "Custom or in-house" },
        { value: "spreadsheets", label: "Spreadsheets / manual" },
        { value: "other", label: "Something else" },
      ],
      entitiesLabel: "Number of entities",
      entitiesOptions: [
        { value: "", label: "Select…" },
        { value: "1", label: "One" },
        { value: "2_5", label: "Two to five" },
        { value: "6_plus", label: "Six or more" },
      ],
      stageLabel: "Where you are now",
      stageOptions: [
        { value: "", label: "Select…" },
        { value: "not_started", label: "We haven't started" },
        { value: "chose_provider", label: "We've chosen a provider" },
        { value: "in_progress", label: "Implementation underway" },
        { value: "stuck", label: "Implementation is stuck" },
        { value: "live", label: "We're already live" },
      ],
      aspLabel: "Accredited provider appointed?",
      aspOptions: [
        { value: "", label: "Select…" },
        { value: "no", label: "Not yet" },
        { value: "comparing", label: "Comparing proposals" },
        { value: "yes", label: "Yes, appointed" },
      ],
      message: "Anything else we should know?",
      submit: "Send message",
      submitting: "Sending…",
    },
    success: "Thanks — that's landed with our team. We'll be in touch within one business day.",
    error: "Something went wrong sending that. Please try again, or email us directly.",
    directEmail: "info@coreholdsolutions.com",
  },

  privacy: {
    eyebrow: "Privacy Policy",
    h1: "Privacy Policy",
    updated: "Last updated: 1 September 2026",
    body: [
      "This is a plain-language summary. It is not a substitute for formal legal review before launch — have counsel confirm this against UAE data protection law before this page is treated as final.",
      "What we collect: when you use the readiness calculator or contact form, we collect the business and contact details you provide — business name, contact name, email, phone number, revenue band, current invoicing method, and your calculated deadline. The contact form also asks, optionally, about your industry, your accounting or ERP system, how many entities you operate, where you are in the process, and whether you have appointed an accredited provider. We additionally record which page you submitted the form from, the site that referred you, and any campaign parameters in the link you followed, so we can tell which parts of this site are useful. We do not read your browsing history and we do not track you across other websites.",
      "Why we collect it: to respond to your enquiry, to send you the results you asked for, and to follow up about CHS services. We do not sell your data.",
      "Where it's stored: your submission is stored in our lead database and is accessible to CoreholdSolutions staff for the purpose of following up with you.",
      "Your rights: you can ask us to access, correct, or delete your information at any time by emailing info@coreholdsolutions.com.",
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

  whatsapp: {
    label: "Chat on WhatsApp",
    ariaLabel: "Chat with CoreholdSolutions on WhatsApp",
    prefill: "Hi CoreholdSolutions, I'd like to ask about UAE e-invoicing compliance.",
  },

  common: {
    requiredField: "This field is required.",
    invalidEmail: "Enter a valid email address.",
    skipToContent: "Skip to content",
  },

  insights: {
    eyebrow: "Insights",
    h1: "Notes on getting UAE e-invoicing right.",
    intro:
      "Plain-language analysis of the regulation, the deadlines, and the decisions they force — written for the people who actually have to act on them.",
    readingTime: "min read",
    publishedLabel: "Published",
    updatedLabel: "Updated",
    backToIndex: "All insights",
    sourcesHeading: "Sources",
    ctaHeading: "Not sure which of this applies to you?",
    ctaBody:
      "Tell us your revenue band and what you invoice with, and we will come back with the dates that bind your business and a realistic path to meeting them.",
    ctaButton: "Talk to a consultant",
    empty: "Nothing published in this language yet.",
    relatedHeading: "More from Insights",
  },

};

export default en;
export type Dictionary = typeof en;
