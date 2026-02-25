import { redirect } from "next/navigation";
import { profiles } from "@/lib/profile-content";
import type { ProfileSlug } from "@/types/quiz";

import ProfileBadge from "@/components/results/ProfileBadge";
import DiagnosisParagraph from "@/components/results/DiagnosisParagraph";
import RecommendationList from "@/components/results/RecommendationList";
import SocialProofBlock from "@/components/results/SocialProofBlock";
import BookingCTA from "@/components/results/BookingCTA";

interface Props {
  params: { profile: string };
}

const VALID_PROFILES: ProfileSlug[] = [
  "scaling-operator",
  "revenue-ceiling",
  "firefighter",
  "bottleneck-builder",
  "not-yet",
];

export function generateStaticParams() {
  return VALID_PROFILES.map((profile) => ({ profile }));
}

export async function generateMetadata({ params }: Props) {
  const content = profiles[params.profile as ProfileSlug];
  if (!content) return {};
  return {
    title: `${content.name} | Growbly`,
    description: content.tagline,
  };
}

export default function ResultsPage({ params }: Props) {
  const profileSlug = params.profile as ProfileSlug;

  if (!VALID_PROFILES.includes(profileSlug)) {
    redirect("/");
  }

  const content = profiles[profileSlug];

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto border-b border-gray-100">
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

      {/* Content */}
      <div className="max-w-2xl mx-auto px-5 py-8 sm:py-12">
        <div className="animate-slide-up">
          <ProfileBadge content={content} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <DiagnosisParagraph text={content.diagnosisTemplate} />
          <RecommendationList recommendations={content.recommendations} />
          <SocialProofBlock proof={content.socialProof} />
          <BookingCTA
            ctaPrimary={content.ctaPrimary}
            ctaSecondary={content.ctaSecondary}
            notYet={content.notYet}
          />
        </div>
      </div>
    </main>
  );
}
