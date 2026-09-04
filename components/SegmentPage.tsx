import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSegment, listSegments, basePath } from "@/lib/segments";
import type { SegmentKind } from "@/lib/segments/types";
import { Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import ConcentricMotif from "@/components/ConcentricMotif";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { localePath } from "@/lib/i18n/path";
import Link from "next/link";

/**
 * Shared renderer for industry and ERP landing pages. Both kinds share a shape,
 * so they share a component — the difference is content, not layout.
 */
export default function SegmentPage({
  locale,
  kind,
  slug,
}: {
  locale: Locale;
  kind: SegmentKind;
  slug: string;
}) {
  const dict = getDictionary(locale);
  const seg = getSegment(kind, slug)!;
  const c = seg.content[locale]!;
  const others = listSegments(kind, locale).filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-32 h-[32rem] w-[32rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{seg.label[locale]}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-4xl font-display text-h1">{c.h1}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-50/80">{c.lede}</p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href={localePath(locale, "/readiness-assessment")}>{c.cta}</LinkButton>
              <LinkButton href={localePath(locale, "/implementation")} variant="secondary">
                {dict.nav.implementation}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <h2 className="max-w-2xl font-display text-h2">{c.differentHeading}</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {c.different.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 80}>
                <article className="h-full rounded-md border border-line bg-white p-7 sm:p-8">
                  <h3 className="font-display text-h4">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-700">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-section-y text-paper-50">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="up">
            <div>
              <h2 className="font-display text-h3">{c.environmentHeading}</h2>
              <div className="mt-8 space-y-7">
                {c.environment.map((p) => (
                  <div key={p.title} className="border-s-2 border-brass-400/50 ps-6">
                    <h3 className="font-body font-semibold">{p.title}</h3>
                    <p className="mt-2 text-small leading-relaxed text-paper-50/70">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <div>
              <h2 className="font-display text-h3">{c.issuesHeading}</h2>
              <div className="mt-8 space-y-7">
                {c.issues.map((p) => (
                  <div key={p.title} className="border-s-2 border-paper-50/15 ps-6">
                    <h3 className="font-body font-semibold">{p.title}</h3>
                    <p className="mt-2 text-small leading-relaxed text-paper-50/70">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-100 py-section-y">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="up">
            <div>
              <h2 className="font-display text-h3">{c.approachHeading}</h2>
              <ol className="mt-8 space-y-4">
                {c.approach.map((step, i) => (
                  <li key={step} className="flex gap-4 leading-relaxed text-ink-700">
                    <span className="mt-0.5 font-display text-small text-brass-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <div className="rounded-md border border-brass-400 bg-brass-50 p-8">
              <p className="leading-relaxed text-ink-700">{c.note}</p>
              <div className="mt-8">
                <LinkButton href={localePath(locale, "/readiness-assessment")}>{c.cta}</LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-paper-50 py-section-y">
          <div className="container-content">
            <h2 className="font-display text-h3">{dict.segments[kind].alsoHeading}</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={localePath(locale, `${basePath[kind]}/${o.slug}`)}
                    className="inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-small text-ink-900 transition-colors hover:border-brass-400"
                  >
                    {o.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
