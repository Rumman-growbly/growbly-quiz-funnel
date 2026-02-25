"use client";

interface ProgressBarProps {
  currentStep: number; // 1-based
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;
        return (
          <div
            key={i}
            className={`
              rounded-full transition-all duration-300
              ${isActive
                ? "w-6 h-2 bg-brand-accent"
                : isCompleted
                ? "w-2 h-2 bg-brand-accent/40"
                : "w-2 h-2 bg-gray-200"
              }
            `}
          />
        );
      })}
    </div>
  );
}
