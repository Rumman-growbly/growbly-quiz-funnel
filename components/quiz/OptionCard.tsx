"use client";

interface OptionCardProps {
  value: string;
  label: string;
  subtext?: string;
  emoji?: string;
  selected: boolean;
  onClick: (value: string) => void;
}

export default function OptionCard({
  value,
  label,
  subtext,
  emoji,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      onClick={() => onClick(value)}
      className={`
        w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 group
        min-h-[56px] flex items-center gap-4
        ${
          selected
            ? "border-brand-accent bg-brand-accent/15 shadow-[0_0_0_1px_#6455d7]"
            : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8"
        }
      `}
      aria-pressed={selected}
    >
      {emoji && (
        <span className="text-xl shrink-0 select-none" aria-hidden>
          {emoji}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <p
          className={`font-medium text-sm sm:text-base leading-snug ${
            selected ? "text-white" : "text-white/90"
          }`}
        >
          {label}
        </p>
        {subtext && (
          <p className="text-xs text-brand-muted mt-0.5 leading-snug">
            {subtext}
          </p>
        )}
      </div>
      {/* Checkmark */}
      <div
        className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          selected
            ? "border-brand-accent bg-brand-accent"
            : "border-white/20 group-hover:border-white/40"
        }`}
      >
        {selected && (
          <svg
            className="w-3 h-3 text-white"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
