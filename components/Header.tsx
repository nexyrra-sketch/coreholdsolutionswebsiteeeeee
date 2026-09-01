"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { switchLocalePath, localePath } from "@/lib/i18n/path";
import { BRAND } from "@/lib/brand";
import { LinkButton } from "./Button";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? `/${locale}`;
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: localePath(locale, "/"), label: dict.nav.home },
    { href: localePath(locale, "/how-it-works"), label: dict.nav.howItWorks },
    { href: localePath(locale, "/pricing"), label: dict.nav.pricing },
    { href: localePath(locale, "/glossary"), label: dict.nav.glossary },
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper-50/95 backdrop-blur supports-[backdrop-filter]:bg-paper-50/80">
      <a href="#main" className="sr-only-focusable fixed top-2 start-2 z-50 rounded bg-ink-950 px-4 py-2 text-paper-50">
        {dict.common.skipToContent}
      </a>
      <div className="container-content flex h-18 items-center justify-between gap-4">
        <Link href={localePath(locale, "/")} className="flex items-center gap-2 shrink-0" aria-label={BRAND.fullEn}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink-950 text-small font-display font-semibold">
            {BRAND.short}
          </span>
          <span className="hidden sm:block font-display text-lg leading-none">
            {locale === "ar" ? BRAND.fullAr : BRAND.fullEn}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-small font-medium text-ink-800 hover:text-ink-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={switchLocalePath(pathname, locale === "en" ? "ar" : "en")}
            className="text-small font-medium text-ink-700 hover:text-ink-950 underline underline-offset-4"
            aria-label={dict.nav.languageSwitchAria}
          >
            {dict.nav.languageSwitch}
          </Link>
          <LinkButton href={localePath(locale, "/calculator")} size="default">
            {dict.nav.checkDeadline}
          </LinkButton>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded border border-ink-900/20"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink-950 transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-1/2 h-px w-5 bg-ink-950 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 bottom-0 h-px w-5 bg-ink-950 transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="lg:hidden border-t border-line bg-paper-50">
          <ul className="container-content flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-display text-ink-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 flex flex-col gap-3">
              <Link
                href={switchLocalePath(pathname, locale === "en" ? "ar" : "en")}
                className="text-small font-medium text-ink-700 underline underline-offset-4"
              >
                {dict.nav.languageSwitch}
              </Link>
              <LinkButton href={localePath(locale, "/calculator")} onClick={() => setOpen(false)}>
                {dict.nav.checkDeadline}
              </LinkButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
