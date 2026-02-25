"use client";

interface BookingCTAProps {
  ctaPrimary: string;
  ctaSecondary: string;
  notYet: boolean;
  firstName: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// Replace with your actual Calendly URL
const CALENDLY_URL = "https://calendly.com/growbly/strategy-call";

export default function BookingCTA({
  ctaPrimary,
  ctaSecondary,
  notYet,
  firstName,
}: BookingCTAProps) {
  function openCalendly() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  }

  if (notYet) {
    return (
      <div className="text-center pb-20">
        <h3 className="text-xl font-bold text-white mb-3">
          Stay in the loop, {firstName}
        </h3>
        <p className="text-brand-muted text-sm mb-6 max-w-sm mx-auto">
          We&rsquo;ll send you the free guide and reach out when the timing is
          right for your business.
        </p>
        <p className="text-brand-muted text-xs">
          (We already have your email — you&rsquo;re all set.)
        </p>
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-brand-muted text-sm mb-4">
            Want to chat anyway?
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Book a call
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center pb-20">
      {/* Urgency framing */}
      <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/25 rounded-full px-4 py-1.5 mb-6">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-xs font-medium">
          Strategy calls available this week
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Ready to build this for your business?
      </h3>
      <p className="text-brand-muted text-sm sm:text-base mb-8 max-w-sm mx-auto">
        30 minutes. No pitch. We&rsquo;ll map out exactly what your automation
        stack should look like — and what it would take to build it.
      </p>

      <button
        onClick={openCalendly}
        className="
          w-full sm:w-auto inline-flex items-center justify-center gap-2
          bg-brand-accent text-white font-semibold text-base
          px-8 py-4 rounded-xl
          hover:bg-brand-accent/90 active:scale-[0.98]
          transition-all duration-200 shadow-lg shadow-brand-accent/25
        "
      >
        {ctaPrimary}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </button>

      <p className="mt-4 text-xs text-brand-muted">
        Free · No obligation · 30 minutes
      </p>

      <div className="mt-10 pt-8 border-t border-white/10">
        <p className="text-brand-muted text-xs">
          Not ready to call yet?{" "}
          <a
            href="/"
            className="text-brand-accent hover:underline"
          >
            {ctaSecondary}
          </a>
        </p>
      </div>
    </div>
  );
}
