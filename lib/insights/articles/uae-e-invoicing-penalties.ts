import type { Article } from "../types";

export const uaeEInvoicingPenalties: Article = {
  slug: "uae-e-invoicing-penalties",
  published: "2026-09-03",
  readingMinutes: 6,
  content: {
    en: {
      title: "What missing your UAE e-invoicing deadline actually costs",
      description:
        "The UAE has published its e-invoicing penalty schedule in Cabinet Decision No. 106 of 2025. Here is every fine, what triggers it, and how the amounts stack up over a year of doing nothing.",
      intro:
        "For most of 2025 the honest answer to 'what happens if we miss the deadline' was that nobody could give you a number. That changed when Cabinet Decision No. 106 of 2025 was published. There are now six specific violations with six specific fines, and the structure of them tells you something useful about what the Federal Tax Authority is actually policing.",
      body: [
        { type: "h2", text: "The six penalties" },
        {
          type: "p",
          text: "These are the violations and amounts as published by the Ministry of Finance. Nothing here is our interpretation of the numbers — the numbers are the numbers.",
        },
        {
          type: "table",
          head: ["Violation", "Penalty"],
          rows: [
            [
              "Failure to implement the Electronic Invoicing System, or to appoint an Accredited Service Provider, within the prescribed timeline",
              "AED 5,000 per month, or part of a month",
            ],
            [
              "Failure to issue or transmit an electronic invoice through the system within the prescribed timeline",
              "AED 100 per invoice, capped at AED 5,000 per month",
            ],
            [
              "Failure to issue or transmit an electronic credit note through the system within the prescribed timeline",
              "AED 100 per credit note, capped at AED 5,000 per month",
            ],
            [
              "Issuer's failure to notify the Authority of a system failure within the prescribed timeline",
              "AED 1,000 per day, or part of a day",
            ],
            [
              "Recipient's failure to notify the Authority of a system failure within the prescribed timeline",
              "AED 1,000 per day, or part of a day",
            ],
            [
              "Failure to notify your Accredited Service Provider of changes to your data within the prescribed timeline",
              "AED 1,000 per day, or part of a day",
            ],
          ],
          note: "Source: Cabinet Decision No. 106 of 2025, as published by the Ministry of Finance.",
        },
        { type: "h2", text: "The one that catches people" },
        {
          type: "p",
          text: "The first line is the one that matters most, and it is the one businesses tend to misread. AED 5,000 a month sounds survivable — an annoyance, not an emergency. The problem is the phrase 'or part of a month', and the fact that the clock starts at your deadline, not at the moment somebody notices.",
        },
        {
          type: "p",
          text: "If your appointment deadline is 31 March 2027 and you appoint a provider on 2 April, you are into a new month, and that is a charge. Nothing about the penalty requires the Authority to contact you first, and nothing about it pauses while you are getting quotes or waiting for a provider to come back to you. It simply runs.",
        },
        { type: "h2", text: "What a year of drift looks like" },
        {
          type: "p",
          text: "Take a business under AED 50 million in annual revenue — so an appointment deadline of 31 March 2027 and a go-live date of 1 July 2027. Say it does nothing until December 2027, which is not an unusual amount of slippage for a compliance project that nobody owns internally.",
        },
        {
          type: "ul",
          items: [
            "April through November 2027 with no provider appointed and no system implemented: eight months at AED 5,000 — AED 40,000.",
            "July through November 2027, now also past the go-live date and not transmitting invoices: at 50 or more invoices a month, that hits the AED 5,000 monthly cap every month — AED 25,000.",
            "Running total by the start of December 2027: roughly AED 65,000, before anyone has looked at whether the credit-note line applies as well.",
          ],
        },
        {
          type: "callout",
          title: "Read this as an illustration, not a ruling",
          text: "How these penalties are applied in a specific case is the Federal Tax Authority's call, not ours. The arithmetic above assumes both lines run concurrently once you are past go-live, and assumes enough invoice volume to reach the monthly cap. Your own exposure depends on your dates, your volumes, and the Authority's assessment. If you want a number you can put in front of a board, that is a conversation with your tax advisor — and we will happily sit in it.",
        },
        { type: "h2", text: "When your deadlines actually fall" },
        {
          type: "p",
          text: "The penalties only mean something once you know which dates apply to you. There are three bands, and the appointment date is always the earlier of the two — the one worth putting in a calendar.",
        },
        {
          type: "table",
          head: ["Who you are", "Appoint a provider by", "Live by"],
          rows: [
            ["Annual revenue of AED 50 million or more", "30 October 2026", "1 January 2027"],
            ["Annual revenue under AED 50 million", "31 March 2027", "1 July 2027"],
            ["Government entities", "31 March 2027", "1 October 2027"],
          ],
          note: "The 30 October 2026 appointment date for large businesses was extended from an original 31 July 2026. The 1 January 2027 go-live date did not move.",
        },
        {
          type: "p",
          text: "Voluntary adoption ahead of your date is allowed and carries no penalty. The penalty regime bites only once you are mandatorily in scope and have missed a prescribed timeline.",
        },
        { type: "h2", text: "What the penalty structure tells you" },
        {
          type: "p",
          text: "Look at where the money is. The heaviest recurring charge is not for getting an invoice wrong — it is for not having appointed a provider and stood the system up. The per-invoice fines are capped at AED 5,000 a month; the appointment failure is AED 5,000 a month on its own, uncapped in duration, and runs for as long as you are not compliant.",
        },
        {
          type: "p",
          text: "That is a deliberate signal. The Authority is not primarily trying to fine you for imperfect invoices in your first weeks of operation. It is trying to make sure that, by the date, you have a provider and a working connection. Which means the expensive mistake is not a technical one. It is a scheduling one.",
        },
        { type: "h2", text: "The quiet lines at the bottom" },
        {
          type: "p",
          text: "The last three violations are the ones almost nobody plans for, because they are not about the launch — they are about the years afterwards. Two of them are about telling the Authority when your system fails, and they cost AED 1,000 a day. The third is about telling your provider when your own data changes.",
        },
        {
          type: "p",
          text: "That last one is worth sitting with. Change your trade licence details, restructure an entity, change a TRN, and you now have a notification obligation with a daily fine attached. This is not something an integration project closes out. It is an operating responsibility that someone has to own permanently, which is precisely the part most businesses have not thought about yet.",
        },
        { type: "h2", text: "What to do about it" },
        {
          type: "p",
          text: "If your revenue is at or above AED 50 million, your appointment deadline is 30 October 2026 and the useful question is whether the provider you are about to choose is the right one — because switching later is a second integration, not an administrative change.",
        },
        {
          type: "p",
          text: "If you are under AED 50 million, you have until 31 March 2027, and the honest advice is that the date is not the constraint. The constraint is that provider selection, data mapping and a real test cycle take longer than people expect, and everyone in the country under the threshold shares the same deadline. The queue in early 2027 will not be short.",
        },
        {
          type: "p",
          text: "CoreholdSolutions holds no reseller margin with any accredited provider, which is the entire reason our recommendation is worth anything. If you want to know which providers actually fit your systems and your volumes, that is the conversation to have.",
        },
      ],
      sources: [
        {
          label: "Cabinet Decision No. 106 of 2025 on Violations and Administrative Penalties — Ministry of Finance (PDF)",
          url: "https://mof.gov.ae/wp-content/uploads/2025/12/Cabinet-Decision-Violations-and-Penalties-eInvoicing-final-version-en-8.12.25.pdf",
        },
        {
          label: "Cabinet Decision No. 106 of 2025 — Federal Tax Authority legislation library (PDF)",
          url: "https://tax.gov.ae/Datafolder/Files/Legislation/2025/Cabinet%20Decision%20No.%20106%20of%202025.pdf",
        },
      ],
    },
  },
};
