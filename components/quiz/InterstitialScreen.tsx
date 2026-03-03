"use client";

interface InterstitialScreenProps {
  variant: 1 | 2;
  onContinue: () => void;
}

const CONTENT = {
  1: {
    eyebrow: "You're not alone in this.",
    heading: "Most growing businesses hit exactly this wall.",
    body: "Manual work, disconnected tools, team bottlenecks — these aren't signs that something's broken. They're signs that your business has outgrown the systems it started with. The next few questions help us figure out exactly where to start.",
  },
  2: {
    eyebrow: "Almost there.",
    heading: "We're building your recommendation now.",
    body: "Two final questions — these help us scope the right level of solution for your business, so we can give you a specific recommendation rather than a generic one.",
  },
} as const;

export default function InterstitialScreen({
  variant,
  onContinue,
}: InterstitialScreenProps) {
  const c = CONTENT[variant];

  return (
    <div className="w-full flex flex-col items-start">
      {/* Eyebrow */}
      <p className="text-sm font-semibold text-[#92400e] uppercase tracking-widest mb-4">
        {c.eyebrow}
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
        {c.heading}
      </h2>

      {/* Body */}
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
        {c.body}
      </p>

      {/* Continue */}
      <button
        onClick={onContinue}
        className="
          inline-flex items-center gap-2
          bg-gray-900 text-white font-semibold text-base
          px-7 py-3.5 rounded-xl
          hover:bg-gray-800 active:scale-[0.98]
          transition-all duration-200
        "
      >
        Continue
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
      </button>
    </div>
  );
}
