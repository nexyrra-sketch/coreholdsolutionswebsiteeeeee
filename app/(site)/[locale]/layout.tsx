import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../globals.css";
import { locales, localeMeta, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import "@/lib/fonts";
import { BRAND } from "@/lib/brand";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/motion/ScrollProgress";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  const base = `https://${BRAND.domain}`;

  return {
    metadataBase: new URL(base),
    title: {
      default: `${BRAND.fullEn} — ${dict.meta.tagline}`,
      template: `%s — ${BRAND.short}`,
    },
    description: dict.meta.ogDescription,
    alternates: {
      canonical: `${base}/${params.locale}`,
      languages: {
        en: `${base}/en`,
        ar: `${base}/ar`,
        "x-default": `${base}/en`,
      },
    },
    openGraph: {
      title: `${BRAND.fullEn} — ${dict.meta.tagline}`,
      description: dict.meta.ogDescription,
      url: `${base}/${params.locale}`,
      siteName: BRAND.fullEn,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      locale: params.locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${BRAND.fullEn} — ${dict.meta.tagline}`,
      description: dict.meta.ogDescription,
      images: ["/og-image.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const meta = localeMeta[locale];
  const base = `https://${BRAND.domain}`;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.fullEn,
    alternateName: BRAND.fullAr,
    url: base,
    logo: `${base}/favicon.svg`,
    email: BRAND.email,
    description: dict.meta.ogDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: BRAND.whatsappNumber,
      email: BRAND.email,
      areaServed: "AE",
      availableLanguage: ["en", "ar"],
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "UAE e-invoicing integration, implementation & compliance advisory",
    provider: { "@type": "Organization", name: BRAND.fullEn },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    description: dict.howItWorks.intro,
  };

  return (
    <html lang={meta.htmlLang} dir={meta.dir}>
      <body>
        {/* Scroll reveals hide their content until JavaScript observes them.
            If JavaScript never runs, this un-hides everything so the page is
            still fully readable rather than a column of blank space. */}
        <noscript>
          <style>{`.chs-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ScrollProgress />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <Header locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton dict={dict} />
      </body>
    </html>
  );
}
