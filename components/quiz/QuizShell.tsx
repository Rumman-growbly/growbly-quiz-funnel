"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import ProgressBar from "./ProgressBar";
import BackButton from "./BackButton";
import QuizStep from "./QuizStep";
import MultiSelectStep from "./MultiSelectStep";
import LeadCaptureStep from "./LeadCaptureStep";

import {
  STATIC_STEPS,
  getBranchStep,
  calculateProgress,
  getNextStep,
  getPrevStep,
  calculateProfile,
  isHighPriority,
} from "@/lib/quiz-logic";

import type {
  QuizAnswers,
  QuizStepId,
  LeadData,
  RevenueRange,
  BusinessType,
  PainPoint,
  Q4Answer,
  Q5Answer,
  ToolOption,
} from "@/types/quiz";

const STEP_ORDER: QuizStepId[] = [
  "q1-revenue",
  "q2-business-type",
  "q3-pain-point",
  "q4-branch",
  "q5-branch",
  "q6-tools",
  "lead-capture",
];

const INITIAL_ANSWERS: QuizAnswers = {
  revenue: null,
  businessType: null,
  painPoint: null,
  q4: null,
  q5: null,
  tools: [],
};

type Direction = "forward" | "back";

const variants = {
  enter: (direction: Direction) => ({
    x: direction === "forward" ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: (direction: Direction) => ({
    x: direction === "forward" ? -48 : 48,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  }),
};

export default function QuizShell() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<QuizStepId>("q1-revenue");
  const [answers, setAnswers] = useState<QuizAnswers>(INITIAL_ANSWERS);
  const [direction, setDirection] = useState<Direction>("forward");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Derived values ────────────────────────────────────────────────────────
  const stepIndex = STEP_ORDER.indexOf(currentStep); // 0-based
  const progress = calculateProgress(currentStep);
  const canGoBack = stepIndex > 0;

  // ── Navigation ────────────────────────────────────────────────────────────
  const goForward = useCallback(() => {
    const next = getNextStep(currentStep);
    if (next === "done") return;
    setDirection("forward");
    setCurrentStep(next);
  }, [currentStep]);

  const goBack = useCallback(() => {
    const prev = getPrevStep(currentStep);
    if (!prev) return;
    setDirection("back");
    setCurrentStep(prev);
  }, [currentStep]);

  // ── Single-select handler (auto-advance after 300ms) ──────────────────────
  function handleSingleSelect(stepId: QuizStepId, value: string) {
    // Update answers
    setAnswers((prev) => {
      switch (stepId) {
        case "q1-revenue":
          return { ...prev, revenue: value as RevenueRange };
        case "q2-business-type":
          return { ...prev, businessType: value as BusinessType };
        case "q3-pain-point":
          // Also clear branch answers when pain changes
          return {
            ...prev,
            painPoint: value as PainPoint,
            q4: null,
            q5: null,
          };
        case "q4-branch":
          return { ...prev, q4: value as Q4Answer };
        case "q5-branch":
          return { ...prev, q5: value as Q5Answer };
        default:
          return prev;
      }
    });

    // Advance after a brief delay so the user sees their selection
    setTimeout(goForward, 320);
  }

  // ── Multi-select handler ──────────────────────────────────────────────────
  function handleToolToggle(value: ToolOption) {
    setAnswers((prev) => {
      const existing = prev.tools;
      if (value === "none") {
        // Selecting "none" clears everything else
        return { ...prev, tools: existing.includes("none") ? [] : ["none"] };
      }
      // Selecting any real tool clears "none"
      const withoutNone = existing.filter((t) => t !== "none");
      if (withoutNone.includes(value)) {
        return { ...prev, tools: withoutNone.filter((t) => t !== value) };
      }
      return { ...prev, tools: [...withoutNone, value] };
    });
  }

  // ── Lead capture + submit ─────────────────────────────────────────────────
  async function handleLeadSubmit(lead: LeadData) {
    const profile = calculateProfile(answers);
    const highPriority = isHighPriority(answers);

    setIsSubmitting(true);

    try {
      await fetch("/api/submit-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          lead,
          profile,
          isHighPriority: highPriority,
        }),
      });
    } catch {
      // Non-blocking — navigate to results regardless of API outcome
    }

    router.push(
      `/results/${profile}?name=${encodeURIComponent(lead.firstName)}`
    );
  }

  // ── Current step definition ───────────────────────────────────────────────
  function renderStep() {
    switch (currentStep) {
      case "q1-revenue":
      case "q2-business-type":
      case "q3-pain-point": {
        const stepDef = STATIC_STEPS[currentStep];
        const selectedValue =
          currentStep === "q1-revenue"
            ? answers.revenue
            : currentStep === "q2-business-type"
            ? answers.businessType
            : answers.painPoint;
        return (
          <QuizStep
            question={stepDef.question}
            subtext={stepDef.subtext}
            options={stepDef.options!}
            selectedValue={selectedValue}
            onSelect={(val) => handleSingleSelect(currentStep, val)}
          />
        );
      }

      case "q4-branch": {
        const stepDef = getBranchStep("q4-branch", answers.painPoint);
        return (
          <QuizStep
            question={stepDef.question}
            subtext={stepDef.subtext}
            options={stepDef.options!}
            selectedValue={answers.q4}
            onSelect={(val) => handleSingleSelect("q4-branch", val)}
          />
        );
      }

      case "q5-branch": {
        const stepDef = getBranchStep("q5-branch", answers.painPoint);
        return (
          <QuizStep
            question={stepDef.question}
            subtext={stepDef.subtext}
            options={stepDef.options!}
            selectedValue={answers.q5}
            onSelect={(val) => handleSingleSelect("q5-branch", val)}
          />
        );
      }

      case "q6-tools": {
        const stepDef = STATIC_STEPS["q6-tools"];
        return (
          <MultiSelectStep
            question={stepDef.question}
            subtext={stepDef.subtext}
            options={stepDef.options!}
            selectedValues={answers.tools}
            onToggle={handleToolToggle}
            onContinue={goForward}
          />
        );
      }

      case "lead-capture":
        return (
          <LeadCaptureStep
            onSubmit={handleLeadSubmit}
            isSubmitting={isSubmitting}
          />
        );
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="w-full max-w-lg mb-8 sm:mb-10">
        <div className="flex items-center justify-between mb-6">
          {canGoBack ? (
            <BackButton onClick={goBack} />
          ) : (
            <div /> /* spacer */
          )}
          <a
            href="/"
            className="text-brand-muted hover:text-white transition-colors text-sm font-medium"
          >
            Growbly
          </a>
        </div>
        <ProgressBar
          progress={progress}
          currentStep={stepIndex + 1}
          totalSteps={STEP_ORDER.length}
        />
      </div>

      {/* Step content */}
      <div className="w-full max-w-lg flex-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-xs text-brand-muted">
          🔒 Your information is private and never shared.
        </p>
      </div>
    </div>
  );
}
