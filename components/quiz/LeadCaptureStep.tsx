"use client";

import { useState } from "react";
import type { LeadData } from "@/types/quiz";

interface LeadCaptureStepProps {
  onSubmit: (lead: LeadData) => void;
  isSubmitting: boolean;
}

export default function LeadCaptureStep({
  onSubmit,
  isSubmitting,
}: LeadCaptureStepProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>(
    {}
  );

  function validate(): boolean {
    const newErrors: { firstName?: string; email?: string } = {};
    if (!firstName.trim()) {
      newErrors.firstName = "Your first name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Your email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ firstName: firstName.trim(), email: email.trim() });
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-brand-accent text-sm font-medium">
            ✦ Your results are ready
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
          Your personalized automation blueprint is ready.
        </h2>
        <p className="mt-3 text-brand-muted text-sm sm:text-base">
          Where should we send it? Takes 10 seconds.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-white/80 mb-1.5"
          >
            First name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (errors.firstName) setErrors((p) => ({ ...p, firstName: undefined }));
            }}
            placeholder="Alex"
            autoComplete="given-name"
            className={`
              w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white placeholder-white/30
              text-base outline-none transition-all duration-200
              focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20
              ${errors.firstName ? "border-red-500/60" : "border-white/15 hover:border-white/25"}
            `}
          />
          {errors.firstName && (
            <p className="mt-1.5 text-xs text-red-400">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/80 mb-1.5"
          >
            Work email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
            }}
            placeholder="you@company.com"
            autoComplete="email"
            className={`
              w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white placeholder-white/30
              text-base outline-none transition-all duration-200
              focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20
              ${errors.email ? "border-red-500/60" : "border-white/15 hover:border-white/25"}
            `}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-2 w-full py-4 rounded-xl font-semibold text-base
            bg-brand-accent text-white hover:bg-brand-accent/90
            active:scale-[0.98] transition-all duration-200
            disabled:opacity-60 disabled:cursor-not-allowed
            flex items-center justify-center gap-2
          "
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Building your profile…
            </>
          ) : (
            "Show Me My Results →"
          )}
        </button>

        <p className="text-center text-xs text-brand-muted">
          No spam, ever. Unsubscribe any time.
        </p>
      </form>
    </div>
  );
}
