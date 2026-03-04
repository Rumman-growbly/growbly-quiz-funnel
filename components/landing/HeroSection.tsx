import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Subtle purple glow behind hero */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(100,85,215,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-brand-light/50 border border-brand-light rounded-full px-4 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          <span className="text-brand-accent text-sm font-medium">
            Free 2-Minute Diagnostic
          </span>
        </div>

        {/* Headline */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-gray-900 leading-tight tracking-tight text-balance">
            Something in your operation is bleeding time and money every single week.
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-normal text-[#6B7280] leading-snug">
            Most owners never find it.
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
          Answer 8 questions. Get a personalised recommendation for exactly what to fix first.
        </p>

        {/* CTA */}
        <Link
          href="/quiz"
          className="
            inline-flex items-center justify-center gap-2
            bg-brand-accent text-white font-semibold text-base
            px-8 py-4 rounded-xl
            hover:bg-brand-accent/90 active:scale-[0.98]
            transition-all duration-200 shadow-lg shadow-brand-accent/20
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

        {/* Trust line */}
        <p className="mt-4 text-xs text-gray-400">
          2 minutes · No credit card · 100% free
        </p>

        {/* Stats bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-semibold">200+</span>
            <span>businesses assessed</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-semibold">18 hrs/week</span>
            <span>avg time saved</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-semibold">$0</span>
            <span>extra headcount needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
