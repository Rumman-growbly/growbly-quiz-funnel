"use client";

interface ProgressBarProps {
  progress: number; // 0–100
  currentStep: number; // 1-based
  totalSteps: number;
}

export default function ProgressBar({
  progress,
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-brand-muted font-medium">
          Question {currentStep} of {totalSteps}
        </span>
        <span className="text-xs text-brand-muted font-medium">
          {progress}% complete
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
