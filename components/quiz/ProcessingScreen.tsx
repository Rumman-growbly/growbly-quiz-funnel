"use client";

import { useEffect, useState } from "react";

interface ProcessingScreenProps {
  onComplete: () => void;
}

const MESSAGES = [
  "Reviewing your answers\u2026",
  "Mapping your operations profile\u2026",
  "Building your personalised recommendation\u2026",
];

const TOTAL_DURATION = 3500; // ms
const MSG_INTERVAL = TOTAL_DURATION / MESSAGES.length; // ~1167ms each

export default function ProcessingScreen({ onComplete }: ProcessingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Message cycling
    const msgTimers = MESSAGES.map((_, i) =>
      setTimeout(() => setMessageIndex(i), i * MSG_INTERVAL)
    );

    // Smooth progress bar
    const startTime = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);
    }, 30);

    // Complete
    const doneTimer = setTimeout(() => {
      clearInterval(tick);
      setProgress(100);
      onComplete();
    }, TOTAL_DURATION);

    return () => {
      msgTimers.forEach(clearTimeout);
      clearInterval(tick);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Animated logo mark */}
      <div className="mb-10 relative">
        <div className="w-20 h-20 rounded-full bg-brand-light/40 border-2 border-brand-light flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5B21B6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin"
            style={{ animationDuration: "2s" }}
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
      </div>

      {/* Message */}
      <p
        key={messageIndex}
        className="text-xl sm:text-2xl font-semibold text-gray-900 mb-10 min-h-[2em] animate-fade-in"
      >
        {MESSAGES[messageIndex]}
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-xs bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-brand-accent rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
