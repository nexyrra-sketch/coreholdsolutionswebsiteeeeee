import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Section, Eyebrow } from "@/components/Section";
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
  const dict = getDictionary(params.locale);
  const a = dict.about;

  return (
    <>
      <Section tone="ink" className="pt-20">
        <Eyebrow tone="light">{a.eyebrow}</Eyebrow>
        <h1 className="font-display text-h1 max-w-3xl">{a.h1}</h1>
        <p className="mt-6 max-w-2xl text-lg text-paper-50/80">{a.intro}</p>
      </Section>

      <Section>
        <div className="max-w-2xl border-s-2 border-brass-500 ps-6">
          <h2 className="font-display text-h4 mb-3">{a.honesty.title}</h2>
          <p className="text-ink-700">{a.honesty.body}</p>
        </div>
      </Section>

      <Section tone="paper" className="bg-paper-100">
        <Eyebrow>{a.teamHeading}</Eyebrow>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <TeamCard
            photo="/assets/team/ghassan-adil.png"
            name={a.team.ghassan.name}
            title={a.team.ghassan.title}
            bio={a.team.ghassan.bio}
          />
          <TeamCard
            photo="/assets/team/amro-idris.jpg"
            name={a.team.amro.name}
            title={a.team.amro.title}
            bio={a.team.amro.bio}
          />
        </div>
      </Section>
    </>
  );
}

function TeamCard({ photo, name, title, bio }: { photo: string; name: string; title: string; bio: string }) {
  return (
    <div className="rounded-md border border-line bg-white p-6 sm:p-8">
      <div className="relative h-40 w-40 overflow-hidden rounded-md border border-line mb-6">
        <Image src={photo} alt={name} fill sizes="160px" className="object-cover" />
      </div>
      <h3 className="font-display text-xl">{name}</h3>
      <p className="text-small font-medium text-brass-600 mb-4">{title}</p>
      <p className="text-small text-ink-700">{bio}</p>
    </div>
  );
}
