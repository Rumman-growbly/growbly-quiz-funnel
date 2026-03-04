"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import ProgressBar from "./ProgressBar";
import BackButton from "./BackButton";
import QuizStep from "./QuizStep";
import InterstitialScreen, { type InterstitialVariant } from "./InterstitialScreen";
import EmailCaptureScreen from "./EmailCaptureScreen";
import ProcessingScreen from "./ProcessingScreen";

import {
  QUESTIONS,
  ANSWER_FIELD,
  STEP_ORDER,
  getNextStep,
  getPrevStep,
  getEffectiveQuestionNumber,
  calculateScores,
  calculateTier,
  isQuestionStep,
  TOTAL_QUESTIONS,
} from "@/lib/quiz-logic";

import type { QuizAnswers, QuizStepId } from "@/types/quiz";

const INITIAL_ANSWERS: QuizAnswers = {
  role:          null,
  revenue:       null,
  pain:          null,
  scale:         null,
  attempts:      null,
  timeline:      null,
  aiFamiliarity: null,
  investment:    null,
};

type Direction = "forward" | "back";

const variants = {
  enter: (direction: Direction) => ({
    x: direction === "forward" ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: (direction: Direction) => ({
    x: direction === "forward" ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  }),
};

export default function QuizShell() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<QuizStepId>("q1-role");
  const [answers, setAnswers] = useState<QuizAnswers>(INITIAL_ANSWERS);
  const [email, setEmail] = useState("");
  const [direction, setDirection] = useState<Direction>("forward");

  const stepIndex = STEP_ORDER.indexOf(currentStep);
  const canGoBack = stepIndex > 0 && currentStep !== "processing";
  const isProcessing = currentStep === "processing";
  const isInterstitial = currentStep === "interstitial-1" || currentStep === "interstitial-2";
  const bgCream = isInterstitial;

  // ── Navigation ────────────────────────────────────────────────────────────
  const advance = useCallback(() => {
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

  // ── Single-select handler (auto-advance 320ms) ────────────────────────────
  function handleSingleSelect(stepId: QuizStepId, value: string) {
    if (!isQuestionStep(stepId)) return;
    const field = ANSWER_FIELD[stepId];
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setTimeout(advance, 320);
  }

  // ── Email capture submit ──────────────────────────────────────────────────
  function handleEmailSubmit(capturedEmail: string) {
    setEmail(capturedEmail);
    advance();
  }

  // ── Processing complete — score, submit, navigate ─────────────────────────
  function handleProcessingComplete() {
    const scores = calculateScores(answers);
    const tier = calculateTier(scores);

    // Fire-and-forget — user never waits on this
    fetch("/api/submit-quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        answers,
        lead: { email },
        scores,
        recommendedTier: tier,
      }),
    }).catch(() => {});

    router.push(`/results/${tier}`);
  }

  // ── Render current step ───────────────────────────────────────────────────
  function renderStep() {
    // Question steps
    if (isQuestionStep(currentStep)) {
      const stepDef = QUESTIONS[currentStep];
      const field = ANSWER_FIELD[currentStep];
      const selectedValue = answers[field];

      return (
        <QuizStep
          stepId={currentStep}
          question={stepDef.question}
          subtext={stepDef.subtext}
          options={stepDef.options}
          selectedValue={selectedValue}
          onSelect={(val) => handleSingleSelect(currentStep, val)}
        />
      );
    }

    // Special screens
    switch (currentStep) {
      case "interstitial-1": {
        const revenueVariant = ((): InterstitialVariant => {
          if (answers.revenue === "100k-500k") return "growth";
          if (answers.revenue === "500k-plus") return "enterprise";
          return "starter";
        })();
        return <InterstitialScreen variant={revenueVariant} onContinue={advance} />;
      }

      case "interstitial-2":
        return <InterstitialScreen variant="pre-results" onContinue={advance} />;

      case "email-capture":
        return (
          <EmailCaptureScreen
            initialEmail={email}
            onSubmit={handleEmailSubmit}
          />
        );

      case "processing":
        return <ProcessingScreen onComplete={handleProcessingComplete} />;

      default:
        return null;
    }
  }

  const qNum = getEffectiveQuestionNumber(currentStep);

  return (
    <div
      className={`
        min-h-screen flex flex-col items-center px-4 py-8 sm:py-12
        transition-colors duration-300
        ${bgCream ? "bg-[#FFF7ED]" : "bg-white"}
      `}
    >
      {/* Header — hidden on processing screen */}
      {!isProcessing && (
        <div className="w-full max-w-lg mb-8 sm:mb-10">
          <div className="flex items-center justify-between mb-6">
            {canGoBack ? (
              <BackButton onClick={goBack} />
            ) : (
              <div />
            )}
            <a
              href="/"
              className="text-brand-accent font-semibold text-sm tracking-tight"
            >
              Growbly
            </a>
          </div>
          <ProgressBar
            currentStep={qNum}
            totalSteps={TOTAL_QUESTIONS}
          />
        </div>
      )}

      {/* Step content */}
      <div className={`w-full max-w-lg flex-1 ${isProcessing ? "flex items-center" : ""}`}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer — hidden on processing screen */}
      {!isProcessing && (
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400">
            Your information is private and never shared.
          </p>
        </div>
      )}
    </div>
  );
}
