import Link from "next/link";

export default function StartQuizCTA() {
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-brand-light/30 border border-brand-light">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Ready to find out how AI can transform your business?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-md mx-auto">
            8 questions. 2 minutes. You&rsquo;ll leave with a personalised AI automation recommendation and a clear starting point.
          </p>
          <Link
            href="/quiz"
            className="
              inline-flex items-center gap-2
              bg-brand-accent text-white font-semibold text-base
              px-8 py-4 rounded-xl
              hover:bg-brand-accent/90 active:scale-[0.98]
              transition-all duration-200 shadow-lg shadow-brand-accent/20
            "
          >
            Take the 2-Minute Assessment
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
          <p className="mt-4 text-xs text-gray-400">
            8 questions · 2 minutes · Free
          </p>
        </div>
      </div>
    </section>
  );
}
