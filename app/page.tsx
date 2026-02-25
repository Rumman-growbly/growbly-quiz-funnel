import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import StartQuizCTA from "@/components/landing/StartQuizCTA";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-bg overflow-x-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-5 sm:px-8 py-5 max-w-6xl mx-auto">
        <span className="text-white font-bold text-lg tracking-tight">
          Growbly
        </span>
        <Link
          href="/quiz"
          className="text-sm font-medium text-brand-muted hover:text-white transition-colors"
        >
          Take the quiz →
        </Link>
      </nav>

      {/* Divider */}
      <div className="h-px bg-white/6 max-w-6xl mx-auto" />

      <HeroSection />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-4xl mx-auto" />

      <HowItWorks />

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-4xl mx-auto" />

      <SocialProof />

      <StartQuizCTA />

      {/* Footer */}
      <footer className="border-t border-white/8 px-5 py-8 text-center">
        <p className="text-brand-muted text-xs">
          © {new Date().getFullYear()} Growbly. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
