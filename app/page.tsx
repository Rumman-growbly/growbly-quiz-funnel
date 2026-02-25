import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import SocialProof from "@/components/landing/SocialProof";
import StartQuizCTA from "@/components/landing/StartQuizCTA";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-5 sm:px-8 py-5 max-w-6xl mx-auto border-b border-gray-100">
        <span className="text-brand-accent font-bold text-lg tracking-tight">
          Growbly
        </span>
        <Link
          href="/quiz"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          Take the quiz →
        </Link>
      </nav>

      <HeroSection />

      <div className="h-px bg-gray-100 max-w-4xl mx-auto" />

      <HowItWorks />

      <div className="h-px bg-gray-100 max-w-4xl mx-auto" />

      <SocialProof />

      <StartQuizCTA />

      {/* Footer */}
      <footer className="border-t border-gray-100 px-5 py-8 text-center">
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Growbly. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
