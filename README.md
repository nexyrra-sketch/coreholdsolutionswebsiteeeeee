# CoreholdSolutions website — handoff

Built as a Next.js 14 (App Router, TypeScript, Tailwind) site: bilingual
English/Arabic with real RTL, the countdown + readiness calculator, all
content pages, SEO plumbing, and a working lead-capture + payments backend
that runs on a local database out of the box and upgrades to Supabase +
Stripe + Resend + Plausible by adding API keys — no code changes needed.

This document is the honest status report: what's built and verified,
and exactly what still needs your accounts/credentials before this is
live on coreholdsolutions.com.

## 1. What's done and verified

- **Structure & content** — see `planning/phase-1-content-plan.md` for the
  original content plan and source list for the four regulatory dates.
- **Design system** — colors, type scale, spacing, and the concentric-rings
  motif live in `tailwind.config.ts`, `app/globals.css`, and
  `components/ConcentricMotif.tsx`. Fonts are self-hosted (Newsreader /
  Inter for English, Noto Naskh Arabic / Noto Sans Arabic for Arabic) via
  `@fontsource-variable/*` packages — no runtime dependency on Google Fonts.
- **Home page**: hero, live dual countdown, readiness calculator, "How CHS
  Works," SME/enterprise split, pricing + trust + FAQ teasers.
- **Full site**: `/calculator`, `/how-it-works`, `/pricing`, `/about`,
  `/glossary` (12-entry FAQ + FAQPage schema), `/contact`, `/privacy`,
  `/terms` — all in English and Arabic (`/en/...`, `/ar/...`), with a real
  `dir="rtl"` layout for Arabic (not mirrored text) and self-hosted Arabic
  fonts.
- **SEO**: per-page metadata + hreflang alternates, Organization + Service
  + FAQPage JSON-LD, `sitemap.xml`, `robots.txt`, a generated branded OG
  image, semantic HTML with one H1 per page.
- **Accessibility**: visible 2px focus rings verified by an automated
  keyboard-tab test, ARIA on the countdown (ticking digits are
  `aria-hidden`, a screen-reader-only summary announces the deadline once
  rather than every second) and the calculator (fieldsets/legends, live
  step announcements, inline error text via `role="alert"`), WCAG-AA-range
  contrast in the palette, and `prefers-reduced-motion` handled both
  globally (`app/globals.css`) and via Tailwind's `motion-safe:` variant —
  verified with a reduced-motion browser context producing zero console
  errors.
- **Lead capture, genuinely working**: I ran the calculator through a real
  browser end to end — submitted it, confirmed the lead landed in the
  database with the correct computed deadline, and confirmed both the
  team-notification and customer-confirmation "emails" were generated (see
  §3 on why they're logged rather than delivered right now). Same for the
  contact form. The admin login and leads table were tested the same way.
- **Payments**: Stripe Checkout session creation and a webhook receiver are
  wired and code-complete, keyed off environment variables. Without a real
  Stripe key, the pricing page's buttons degrade gracefully to a "talk to
  us" contact link instead of a broken checkout — verified in the browser.
  I could not test an actual charge, because that requires your Stripe
  account (see §3).
- **Build**: `npm run build` completes cleanly; every page listed above
  prerenders as static HTML.

## 2. What I deliberately did not fabricate

- **Pricing figures** on `/pricing` are clearly-labeled placeholders (AED
  4,500 / 9,500 one-time, AED 350 / 750 monthly). They're realistic
  starting points, not your real rates — replace them in
  `lib/pricing.ts` (the numbers Stripe will actually charge) and in
  `lib/i18n/dictionaries/en.ts` / `ar.ts` (the displayed text) before this
  goes live. Both files say so in comments.
- **Team bios** (`/about`) are built from what you told me about each of
  your roles, not invented career history. If you send me real background
  — prior roles, credentials, years of experience — I'll fold it in.
- **The Arabic translation** is mine, done to a professional standard, but
  it hasn't been reviewed by a native-speaking editor or a UAE legal
  reviewer. Worth a pass before launch, especially on `/privacy` and
  `/terms`.
- **Privacy Policy and Terms** are honest plain-language starting points,
  explicitly flagged in their own body text as not a substitute for real
  legal review.
- I have **not** ranked this site on Google, and no legitimate build can
  promise that — the SEO fundamentals are in place; ranking depends on
  factors outside any one build, and builds over time.

## 3. What needs your accounts before this is fully live

Nothing below requires touching code — only environment variables. Copy
`.env.example` to `.env.local` for local runs, or set these in your
hosting provider's dashboard for production.

| Variable | What it's for | Without it |
|---|---|---|
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Move leads from the local SQLite file to a real hosted Postgres database | Leads save to `data/chs.db` on the server's disk — works, but doesn't survive a redeploy on most hosts, and isn't shared across server instances |
| `RESEND_API_KEY`, `LEADS_FROM_EMAIL`, `LEADS_NOTIFY_EMAIL` | Actually send the team-notification and customer-confirmation emails | Email content is logged to `data/email-log.jsonl` and the console instead of delivered |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | Real checkout and payment confirmation | Pricing page buttons show "talk to us" instead of opening checkout |
| `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` | Password-protect `/admin` (the leads viewer) | `/admin` refuses to log in at all — set these before you rely on it |

Supabase schema: run the SQL in `lib/db/supabase.ts`
(`SUPABASE_SCHEMA_SQL`) once in the Supabase SQL editor for your project.

**Deployment**: this is a standard Next.js app — Vercel is the path of
least resistance (same company as Next.js, zero-config). You'll need to:
1. Push this to a GitHub repo and import it into Vercel (or your host of
   choice).
2. Add the environment variables above in the project settings.
3. Point `coreholdsolutions.com`'s DNS at Vercel and add the domain in the
   Vercel dashboard — Vercel issues the HTTPS certificate automatically.
4. Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=coreholdsolutions.com` and the
   Plausible script (see their site for the exact tag) once you have a
   Plausible account, for privacy-respecting analytics — not wired in yet
   since it needs your account.

I don't have your Stripe, Supabase, Resend, Plausible, domain registrar,
or hosting accounts, and creating financial/production accounts on your
behalf isn't something I should do unsupervised — so this last mile is
yours, but it's genuinely just filling in the table above.

## 4. Local development

```
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start   # production build
```

Leads land in `data/chs.db` (SQLite) until Supabase env vars are set.
View them at `/admin` after setting `ADMIN_PASSWORD`.

## 5. Cross-browser & device testing status

Verified in this build environment: Chromium (desktop 1440×900 and mobile
390×844 viewports), keyboard-only navigation, and `prefers-reduced-motion`.
I do not have Safari, Firefox, or Edge available in this environment, so
the brief's explicit requirement to test those — especially Safari's
flexbox/gap, date input, and `backdrop-filter` divergences — has **not**
been done yet and needs a real pass on your end (or ask me to do it
through a connected browser/device if you'd like me to drive that).
