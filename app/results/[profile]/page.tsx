import { redirect } from "next/navigation";
import { tiers } from "@/lib/tier-content";
import type { TierSlug } from "@/types/quiz";

import ProfileBadge from "@/components/results/ProfileBadge";
import DiagnosisParagraph from "@/components/results/DiagnosisParagraph";
import RecommendationList from "@/components/results/RecommendationList";
import SocialProofBlock from "@/components/results/SocialProofBlock";
import BookingCTA from "@/components/results/BookingCTA";

interface Props {
  params: { profile: string };
}

const VALID_TIERS: TierSlug[] = ["starter", "growth", "enterprise"];

export function generateStaticParams() {
  return VALID_TIERS.map((profile) => ({ profile }));
}

export async function generateMetadata({ params }: Props) {
  const content = tiers[params.profile as TierSlug];
  if (!content) return {};
  return {
    title: `${content.tag} | Growbly`,
    description: content.subheadline,
  };
}

export default function ResultsPage({ params }: Props) {
  const slug = params.profile as TierSlug;

  if (!VALID_TIERS.includes(slug)) {
    redirect("/");
  }

  const content = tiers[slug];

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto border-b border-gray-100">
        <a
          href="/"
          className="text-brand-accent font-semibold text-sm tracking-tight"
        >
          Growbly
        </a>
        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          Your Results
        </span>
      </nav>

      <div className="max-w-2xl mx-auto px-5">
        {/* Above-fold: badge + headline + primary CTA */}
        <div className="pt-8 pb-4 animate-slide-up">
          <ProfileBadge content={content} />
          <BookingCTA
            ctaHeadline={content.ctaHeadline}
            ctaSubheadline={content.ctaSubheadline}
            ctaButton={content.ctaButton}
            ctaSmallPrint={content.ctaSmallPrint}
            accentHex={content.accentHex}
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Detail: diagnosis + includes + testimonial */}
        <div
          className="py-10 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <DiagnosisParagraph text={content.body} accentHex={content.accentHex} />
          <RecommendationList includes={content.includes} accentHex={content.accentHex} />
          <SocialProofBlock testimonial={content.testimonial} />
        </div>
      </div>
    </main>
  );
}
