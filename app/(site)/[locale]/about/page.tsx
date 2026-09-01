import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Eyebrow } from "@/components/Section";
import { LinkButton } from "@/components/Button";
import ConcentricMotif from "@/components/ConcentricMotif";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { localePath } from "@/lib/i18n/path";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.about.h1,
    description: dict.about.intro,
    alternates: pageAlternates(params.locale, "/about"),
  };
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y pt-20 text-paper-50">
        <Parallax speed={0.1} className="pointer-events-none absolute -end-32 -top-40 h-[34rem] w-[34rem]">
          <ConcentricMotif tone="line" rings={7} className="animate-dial h-full w-full opacity-20" />
        </Parallax>
        <div className="container-content relative">
          <Reveal variant="fade">
            <Eyebrow tone="light">{a.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal variant="rise-lg" delay={80}>
            <h1 className="max-w-3xl font-display text-h1">{a.h1}</h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-50/80">{a.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* ---- Principles ---- */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <h2 className="max-w-2xl font-display text-h2">{a.principlesHeading}</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {a.principles.map((principle, i) => (
              <Reveal key={principle.title} variant="up" delay={(i % 2) * 90}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-display text-h4">{principle.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-700">{principle.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Where we stand on accreditation ---- */}
      <section className="bg-paper-100 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <div className="max-w-3xl border-s-2 border-brass-500 ps-6 sm:ps-8">
              <h2 className="mb-4 font-display text-h3">{a.honesty.title}</h2>
              <p className="leading-relaxed text-ink-700">{a.honesty.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Team ---- */}
      <section className="bg-paper-50 py-section-y">
        <div className="container-content">
          <Reveal variant="up">
            <Eyebrow>{a.teamHeading}</Eyebrow>
            <h2 className="max-w-2xl font-display text-h2">{a.teamHeading}</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal variant="up" delay={80}>
              <TeamCard
                photo="/assets/team/ghassan-adil.png"
                name={a.team.ghassan.name}
                title={a.team.ghassan.title}
                bio={a.team.ghassan.bio}
              />
            </Reveal>
            <Reveal variant="up" delay={180}>
              <TeamCard
                photo="/assets/team/amro-idris.jpg"
                name={a.team.amro.name}
                title={a.team.amro.title}
                bio={a.team.amro.bio}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="vault-vignette relative overflow-hidden bg-ink-950 py-section-y text-paper-50">
        <div className="container-content relative text-center">
          <Reveal variant="up">
            <h2 className="mx-auto max-w-2xl font-display text-h2">{dict.contact.h1}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-paper-50/70">{dict.contact.intro}</p>
            <div className="mt-9 flex justify-center">
              <LinkButton href={localePath(locale, "/contact")} size="large">
                {dict.howItWorks.cta}
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TeamCard({ photo, name, title, bio }: { photo: string; name: string; title: string; bio: string }) {
  return (
    <div className="card-lift h-full rounded-md border border-line bg-white p-6 hover:border-brass-400 sm:p-8">
      <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-md border border-line">
        <Image src={photo} alt={name} fill sizes="160px" className="object-cover" />
      </div>
      <h3 className="font-display text-xl">{name}</h3>
      <p className="mb-4 text-small font-medium text-brass-600">{title}</p>
      <p className="text-small leading-relaxed text-ink-700">{bio}</p>
    </div>
  );
}
