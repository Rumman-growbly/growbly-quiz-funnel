"use client";

import { useState } from "react";

interface EmailCaptureScreenProps {
  initialEmail?: string;
  onSubmit: (email: string) => void;
}

export default function EmailCaptureScreen({
  initialEmail = "",
  onSubmit,
}: EmailCaptureScreenProps) {
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    onSubmit(trimmed);
  }

  return (
    <div className="w-full">
      {/* Lock icon */}
      <div className="w-12 h-12 rounded-2xl bg-brand-light/40 border border-brand-light flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5B21B6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-3">
        You&rsquo;re closer than you think.
      </h2>
      <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
        Enter your email and we&rsquo;ll send your personalised AI automation
        recommendation, including the exact package we&rsquo;d recommend and
        why.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="your@email.com"
          autoComplete="email"
          className={`
            w-full px-4 py-3.5 rounded-xl border text-gray-900 text-base
            placeholder-gray-400 focus:outline-none transition-colors
            ${error
              ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
              : "border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            }
          `}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="
            w-full py-3.5 rounded-xl
            bg-brand-accent text-white font-semibold text-base
            hover:bg-brand-accent/90 active:scale-[0.98]
            transition-all duration-200 shadow-lg shadow-brand-accent/20
          "
        >
          Show Me My Results →
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-400">
        No spam. Just your results. Unsubscribe anytime.
      </p>
    </div>
  );
}
