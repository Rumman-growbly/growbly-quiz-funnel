"use client";

import OptionCard from "./OptionCard";
import type { QuizOption } from "@/types/quiz";

interface QuizStepProps {
  question: string;
  subtext?: string;
  options: QuizOption[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

export default function QuizStep({
  question,
  subtext,
  options,
  selectedValue,
  onSelect,
}: QuizStepProps) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
          {question}
        </h2>
        {subtext && (
          <p className="mt-3 text-brand-muted text-sm sm:text-base">
            {subtext}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            value={option.value}
            label={option.label}
            subtext={option.subtext}
            emoji={option.emoji}
            selected={selectedValue === option.value}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
