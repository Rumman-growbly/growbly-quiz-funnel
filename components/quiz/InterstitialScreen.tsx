"use client";

export type InterstitialVariant = "starter" | "growth" | "enterprise" | "pre-results";

interface InterstitialScreenProps {
  variant: InterstitialVariant;
  onContinue: () => void;
}

const CONTENT: Record<
  InterstitialVariant,
  { tag: string; heading: string; body: string; button: string }
> = {
  starter: {
    tag: "YOU ARE CLOSER THAN YOU THINK",
    heading:
      "Most businesses at your stage think they need to grow more before automating. They have it backwards.",
    body: "The right automation at your stage does not just save time. It creates the foundation that makes everything else easier to scale. The next few questions help us figure out exactly where to start.",
    button: "Let\u2019s keep going",
  },
  growth: {
    tag: "THIS IS THE PATTERN WE SEE MOST",
    heading:
      "The businesses we work with most look exactly like yours right now.",
    body: "Strong revenue. A team that works hard. And a set of systems that were never designed to carry a business at this size. The next few questions help us pinpoint exactly which parts of your operation to fix first.",
    button: "Let\u2019s keep going",
  },
  enterprise: {
    tag: "YOU HAVE BUILT SOMETHING REAL",
    heading:
      "At your scale, the problem is not effort. You have plenty of that. The problem is infrastructure.",
    body: "Businesses operating at your level do not have a growth problem. They have a systems problem. The complexity that comes with scale creates operational drag that compounds every single month. The next few questions help us map exactly where it is costing you.",
    button: "Let\u2019s keep going",
  },
  "pre-results": {
    tag: "ALMOST THERE",
    heading: "We\u2019re building your recommendation now.",
    body: "Two final questions. These help us scope the right level of solution for your business, so we can give you a specific recommendation rather than a generic one.",
    button: "Continue",
  },
};

export default function InterstitialScreen({
  variant,
  onContinue,
}: InterstitialScreenProps) {
  const c = CONTENT[variant];

  return (
    <div className="w-full flex flex-col items-start">
      {/* Tag */}
      <p className="text-xs font-bold text-[#92400e] uppercase tracking-widest mb-4">
        {c.tag}
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
        {c.button}
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
