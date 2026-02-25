import { redirect } from "next/navigation";
import { profiles, renderDiagnosis } from "@/lib/profile-content";
import type { ProfileSlug } from "@/types/quiz";

import ProfileBadge from "@/components/results/ProfileBadge";
import DiagnosisParagraph from "@/components/results/DiagnosisParagraph";
import RecommendationList from "@/components/results/RecommendationList";
import SocialProofBlock from "@/components/results/SocialProofBlock";
import BookingCTA from "@/components/results/BookingCTA";

interface Props {
  params: { profile: string };
  searchParams: { name?: string };
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

export default function ResultsPage({ params, searchParams }: Props) {
  const profileSlug = params.profile as ProfileSlug;

  if (!VALID_PROFILES.includes(profileSlug)) {
    redirect("/");
  }

  const content = profiles[profileSlug];
  const firstName = searchParams.name ?? "there";
  const diagnosis = renderDiagnosis(profileSlug, firstName);

  return (
    <main className="min-h-screen bg-brand-bg">
      {/* Subtle gradient glow at the top */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% -5%, rgba(100,85,215,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-2xl mx-auto">
        <a
          href="/"
          className="text-brand-muted hover:text-white transition-colors text-sm font-medium"
        >
          ← Growbly
        </a>
        <span className="text-xs text-brand-muted bg-white/5 border border-white/10 rounded-full px-3 py-1">
          Your Results
        </span>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-5 py-8 sm:py-12">
        {/* Reveal animation container */}
        <div className="animate-slide-up">
          <ProfileBadge content={content} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <DiagnosisParagraph text={diagnosis} />
          <RecommendationList recommendations={content.recommendations} />
          <SocialProofBlock proof={content.socialProof} />
          <BookingCTA
            ctaPrimary={content.ctaPrimary}
            ctaSecondary={content.ctaSecondary}
            notYet={content.notYet}
            firstName={firstName}
          />
        </div>
      </div>
    </main>
  );
}
