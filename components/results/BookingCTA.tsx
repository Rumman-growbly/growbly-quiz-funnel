"use client";

interface BookingCTAProps {
  ctaHeadline: string;
  ctaSubheadline: string;
  ctaButton: string;
  ctaSmallPrint: string;
  accentHex: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/rumman-growbly/quick-checkup";

export default function BookingCTA({
  ctaHeadline,
  ctaSubheadline,
  ctaButton,
  ctaSmallPrint,
  accentHex,
}: BookingCTAProps) {
  function openCalendly() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  }

  return (
    <div className="pb-20">
      {/* Availability badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-700 text-xs font-medium">
            Strategy calls available this week
          </span>
        </div>
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
        {ctaHeadline}
      </h3>
      <p className="text-gray-500 text-sm sm:text-base text-center mb-8 max-w-sm mx-auto leading-relaxed">
        {ctaSubheadline}
      </p>

      <div className="flex justify-center">
        <button
          onClick={openCalendly}
          className="
            inline-flex items-center justify-center gap-2
            text-white font-semibold text-base
            px-8 py-4 rounded-xl
            hover:opacity-90 active:scale-[0.98]
            transition-all duration-200
          "
          style={{
            backgroundColor: accentHex,
            boxShadow: `0 8px 24px ${accentHex}30`,
          }}
        >
          {ctaButton}
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
      </div>

      <p className="mt-4 text-xs text-gray-400 text-center">{ctaSmallPrint}</p>
    </div>
  );
}
