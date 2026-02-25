"use client";

import { useState } from "react";

interface BookingCTAProps {
  ctaPrimary: string;
  ctaSecondary: string;
  notYet: boolean;
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
}: BookingCTAProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function openCalendly() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitting(true);
    try {
      let storedData: Record<string, unknown> = {};
      try {
        const raw = sessionStorage.getItem("quiz_answers");
        if (raw) storedData = JSON.parse(raw);
      } catch {}

      await fetch("/api/submit-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: storedData.answers ?? {},
          lead: { firstName: name.trim(), email: email.trim() },
          profile: storedData.profile ?? "not-yet",
          isHighPriority: storedData.isHighPriority ?? false,
        }),
      });
    } catch {
      // non-blocking — show success regardless
    }
    setSubmitting(false);
    setSubmitted(true);
  }

  const emailForm = (
    <div className="mt-10 pt-8 border-t border-gray-100">
      {submitted ? (
        <div className="text-center py-4">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-medium text-sm">You&rsquo;re on the list.</p>
          <p className="text-gray-400 text-xs mt-1">We&rsquo;ll send your report shortly.</p>
        </div>
      ) : (
        <>
          <p className="text-center text-sm text-gray-500 mb-4">
            Want a copy of this report sent to your inbox?
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Send me the report →"}
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </>
      )}
    </div>
  );

  if (notYet) {
    return (
      <div className="text-center pb-20">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Stay in the loop</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
          We&rsquo;ll reach out when the timing is right for your business.
        </p>
        <button
          onClick={openCalendly}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all"
        >
          Book a call anyway
        </button>
        {emailForm}
      </div>
    );
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
        Ready to build this for your business?
      </h3>
      <p className="text-gray-500 text-sm sm:text-base text-center mb-8 max-w-sm mx-auto">
        30 minutes. No pitch. We&rsquo;ll map out exactly what your automation
        stack should look like — and what it would take to build it.
      </p>

      <div className="flex justify-center">
        <button
          onClick={openCalendly}
          className="
            inline-flex items-center justify-center gap-2
            bg-brand-accent text-white font-semibold text-base
            px-8 py-4 rounded-xl
            hover:bg-brand-accent/90 active:scale-[0.98]
            transition-all duration-200 shadow-lg shadow-brand-accent/20
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
      </div>

      <p className="mt-4 text-xs text-gray-400 text-center">
        Free · No obligation · 30 minutes
      </p>

      {emailForm}

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-xs">
          Not ready to call yet?{" "}
          <a href="/" className="text-brand-accent hover:underline">
            {ctaSecondary}
          </a>
        </p>
      </div>
    </div>
  );
}
