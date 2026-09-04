import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getSegment, segmentRoutes, segmentLocales } from "@/lib/segments";
import SegmentPage from "@/components/SegmentPage";
import { BRAND } from "@/lib/brand";

export function generateStaticParams() {
  return segmentRoutes("erp").map(({ slug, locale }) => ({ slug, locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const seg = getSegment("erp", params.slug);
  const content = seg?.content[params.locale];
  if (!seg || !content) return {};
  const base = `https://${BRAND.domain}`;
  const available = segmentLocales("erp", params.slug);
  return {
    title: content.h1,
    description: seg.summary[params.locale],
    alternates: {
      canonical: `${base}/${params.locale}/erp/${params.slug}`,
      languages: Object.fromEntries(available.map((l) => [l, `${base}/${l}/erp/${params.slug}`])),
    },
  };
}

export default function ErpPage({ params }: { params: { locale: Locale; slug: string } }) {
  const seg = getSegment("erp", params.slug);
  if (!seg || !seg.content[params.locale]) notFound();
  return <SegmentPage locale={params.locale} kind="erp" slug={params.slug} />;
}
