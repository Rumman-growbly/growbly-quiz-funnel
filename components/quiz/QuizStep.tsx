"use client";

import OptionCard from "./OptionCard";
import QuizIllustration from "./QuizIllustration";
import type { QuizOption, QuizStepId } from "@/types/quiz";

interface QuizStepProps {
  stepId: QuizStepId;
  question: string;
  subtext?: string;
  options: QuizOption[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

export default function QuizStep({
  stepId,
  question,
  subtext,
  options,
  selectedValue,
  onSelect,
}: QuizStepProps) {
  return (
    <div className="w-full">
      <QuizIllustration stepId={stepId} />
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
          {question}
        </h2>
        {subtext && (
          <p className="mt-3 text-gray-500 text-sm sm:text-base">{subtext}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            value={option.value}
            label={option.label}
            subtext={option.subtext}
            selected={selectedValue === option.value}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
