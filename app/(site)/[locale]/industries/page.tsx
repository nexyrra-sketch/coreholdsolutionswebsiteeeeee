import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import SegmentIndex from "@/components/SegmentIndex";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.segments.industry.h1,
    description: dict.segments.industry.intro,
    alternates: pageAlternates(params.locale, "/industries"),
  };
}

export default function IndustriesIndexPage({ params }: { params: { locale: Locale } }) {
  return <SegmentIndex locale={params.locale} kind="industry" />;
}
