"use client";

import Script from "next/script";

/**
 * Google Analytics (GA4). Renders nothing — and loads nothing — unless
 * NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so local development and any
 * preview deploy without the env var configured never sends real data
 * to the production GA property. Set the var in Vercel's project
 * environment variables (not just .env.local) for it to take effect on
 * the live site — see .env.example.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
