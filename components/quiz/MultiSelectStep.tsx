"use client";

import OptionCard from "./OptionCard";
import type { QuizOption, ToolOption } from "@/types/quiz";

interface MultiSelectStepProps {
  question: string;
  subtext?: string;
  options: QuizOption[];
  selectedValues: ToolOption[];
  onToggle: (value: ToolOption) => void;
  onContinue: () => void;
}

export default function MultiSelectStep({
  question,
  subtext,
  options,
  selectedValues,
  onToggle,
  onContinue,
}: MultiSelectStepProps) {
  const hasSelection = selectedValues.length > 0;

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
          {question}
        </h2>
        {subtext && (
          <p className="mt-3 text-gray-500 text-sm sm:text-base">{subtext}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-8">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            value={option.value}
            label={option.label}
            selected={selectedValues.includes(option.value as ToolOption)}
            onClick={(val) => onToggle(val as ToolOption)}
          />
        ))}
      </div>
      <button
        onClick={onContinue}
        disabled={!hasSelection}
        className={`
          w-full py-4 rounded-xl font-semibold text-base transition-all duration-200
          ${
            hasSelection
              ? "bg-brand-accent text-white hover:bg-brand-accent/90 active:scale-[0.98] shadow-lg shadow-brand-accent/20"
              : "bg-gray-100 text-gray-300 cursor-not-allowed"
          }
        `}
      >
        Continue →
      </button>
    </div>
  );
}
