import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { listSegments, basePath } from "@/lib/segments";
import type { SegmentKind } from "@/lib/segments/types";
import { Eyebrow } from "@/components/Section";
import ConcentricMotif from "@/components/ConcentricMotif";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { localePath } from "@/lib/i18n/path";
import Link from "next/link";

export default function SegmentIndex({ locale, kind }: { locale: Locale; kind: SegmentKind }) {
  const dict = getDictionary(locale);
  const copy = dict.segments[kind];
  const items = listSegments(kind, locale);

  return (
    <>
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{copy.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-3xl font-display text-h1">{copy.h1}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-50/80">{copy.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((seg, i) => (
              <Reveal key={seg.slug} variant="up" delay={(i % 2) * 80}>
                <Link
                  href={localePath(locale, `${basePath[kind]}/${seg.slug}`)}
                  className="card-lift group flex h-full flex-col rounded-md border border-line bg-white p-8 transition-colors hover:border-brass-400"
                >
                  <h2 className="font-display text-h4 group-hover:text-brass-700">{seg.label[locale]}</h2>
                  <p className="mt-4 leading-relaxed text-ink-700">{seg.summary[locale]}</p>
                  <span className="mt-auto pt-6 text-small font-semibold text-brass-700">{copy.readMore} &rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" delay={120}>
            <p className="mt-12 max-w-2xl leading-relaxed text-ink-600">{copy.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
