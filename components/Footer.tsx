import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { localePath } from "@/lib/i18n/path";
import { BRAND } from "@/lib/brand";
import ConcentricMotif from "./ConcentricMotif";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: localePath(locale, "/how-it-works"), label: dict.nav.howItWorks },
    { href: localePath(locale, "/pricing"), label: dict.nav.pricing },
    { href: localePath(locale, "/about"), label: dict.nav.about },
  ];
  const resourceLinks = [
    { href: localePath(locale, "/glossary"), label: dict.nav.glossary },
    { href: localePath(locale, "/calculator"), label: dict.nav.checkDeadline },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-ink-800 bg-ink-950 text-paper-50">
      <ConcentricMotif
        tone="line"
        rings={6}
        className="pointer-events-none absolute -bottom-24 -end-24 h-80 w-80 opacity-20"
      />
      <div className="container-content relative py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-paper-50 text-small font-display font-semibold">
                {BRAND.short}
              </span>
              <span className="font-display text-lg">{BRAND.fullEn}</span>
              <span className="text-paper-50/50">/</span>
              <span className="font-display text-lg">{BRAND.fullAr}</span>
            </div>
            <p className="max-w-sm text-small text-paper-50/70">{dict.footer.description}</p>
          </div>

          <div>
            <h3 className="text-micro font-semibold uppercase tracking-widest text-paper-50/50 mb-4">
              {dict.footer.quickLinksHeading}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-small text-paper-50/80 hover:text-paper-50">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-micro font-semibold uppercase tracking-widest text-paper-50/50 mb-4">
              {dict.footer.resourcesHeading}
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-small text-paper-50/80 hover:text-paper-50">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 inline-block text-small text-paper-50/80 hover:text-paper-50"
            >
              {BRAND.email}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsappDigits}?text=${encodeURIComponent(dict.whatsapp.prefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-small text-paper-50/80 hover:text-paper-50"
            >
              {dict.whatsapp.label} · {BRAND.whatsappNumber}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-paper-50/10 pt-6">
          <p className="max-w-3xl text-small text-paper-50/50">{dict.footer.disclaimer}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-small text-paper-50/50">
              © {year} {BRAND.fullEn}. {dict.footer.rights}
            </p>
            <div className="flex gap-6">
              <Link href={localePath(locale, "/privacy")} className="text-small text-paper-50/50 hover:text-paper-50">
                {dict.footer.legal.privacy}
              </Link>
              <Link href={localePath(locale, "/terms")} className="text-small text-paper-50/50 hover:text-paper-50">
                {dict.footer.legal.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
