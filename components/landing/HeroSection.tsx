import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(100,85,215,0.22) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-brand-accent/15 border border-brand-accent/25 rounded-full px-4 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          <span className="text-brand-light text-sm font-medium">
            Free 2-Minute Diagnostic
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 text-balance">
          Find out exactly where your business is leaving time and money on the
          table.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-brand-muted leading-relaxed mb-10 max-w-lg mx-auto">
          Answer 6 questions. Get a personalized automation roadmap built for
          businesses doing $50k–$100k+/month who want to scale without adding
          headcount.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quiz"
            className="
              w-full sm:w-auto inline-flex items-center justify-center gap-2
              bg-brand-accent text-white font-semibold text-base
              px-8 py-4 rounded-xl
              hover:bg-brand-accent/90 active:scale-[0.98]
              transition-all duration-200 shadow-lg shadow-brand-accent/25
            "
          >
            Get My Free Automation Assessment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-4 text-xs text-brand-muted">
          2 minutes · No credit card · 100% free
        </p>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-muted">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">200+</span>
            <span>businesses assessed</span>
          </div>
          <div className="w-px h-4 bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">18 hrs/week</span>
            <span>avg time saved</span>
          </div>
          <div className="w-px h-4 bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">$0</span>
            <span>extra headcount needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
