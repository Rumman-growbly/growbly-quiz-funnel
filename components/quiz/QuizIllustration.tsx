import type { QuestionStepId } from "@/types/quiz";

interface QuizIllustrationProps {
  stepId: QuestionStepId;
}

function RoleIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="18" r="9" fill="#e5dcfb" />
      <circle cx="26" cy="18" r="5" fill="#5B21B6" />
      <path d="M10 44c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function RevenueIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="32" width="10" height="14" rx="2" fill="#e5dcfb" />
      <rect x="21" y="22" width="10" height="24" rx="2" fill="#b3a9f0" />
      <rect x="38" y="12" width="10" height="34" rx="2" fill="#5B21B6" />
      <path d="M9 35 L26 24 L43 14" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
    </svg>
  );
}

function PainIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="10" r="6" fill="#5B21B6" />
      <path d="M26 16 L26 26" stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="13" cy="40" r="6" fill="#b3a9f0" />
      <circle cx="39" cy="40" r="6" fill="#b3a9f0" />
      <path d="M26 26 L13 34" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 26 L39 34" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="24" r="7" fill="#e5dcfb" />
      <circle cx="39" cy="24" r="7" fill="#e5dcfb" />
      <circle cx="26" cy="18" r="7" fill="#5B21B6" />
      <path d="M6 42c0-5 3.58-9 8-9M38 42c0-5 3.58-9 8-9M19 42c0-6 3.13-11 7-11s7 5 7 11" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function AttemptsIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="18" stroke="#e5dcfb" strokeWidth="3" fill="none" />
      <circle cx="26" cy="26" r="18" stroke="#5B21B6" strokeWidth="3" strokeDasharray="56 57" strokeLinecap="round" fill="none" />
      <path d="M26 16v10l7 4" stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TimelineIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="40" height="34" rx="4" fill="#e5dcfb" />
      <rect x="6" y="10" width="40" height="12" rx="4" fill="#5B21B6" />
      <rect x="16" y="6" width="4" height="8" rx="2" fill="#5B21B6" />
      <rect x="32" y="6" width="4" height="8" rx="2" fill="#5B21B6" />
      <rect x="13" y="30" width="8" height="4" rx="1" fill="#b3a9f0" />
      <rect x="25" y="30" width="14" height="4" rx="1" fill="#b3a9f0" />
      <rect x="13" y="38" width="14" height="4" rx="1" fill="#b3a9f0" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="16" width="24" height="20" rx="4" fill="#e5dcfb" />
      <circle cx="20" cy="24" r="3" fill="#5B21B6" />
      <circle cx="32" cy="24" r="3" fill="#5B21B6" />
      <rect x="20" y="30" width="12" height="2" rx="1" fill="#5B21B6" />
      <rect x="22" y="10" width="8" height="6" rx="2" fill="#b3a9f0" />
      <rect x="10" y="32" width="4" height="8" rx="2" fill="#b3a9f0" />
      <rect x="38" y="32" width="4" height="8" rx="2" fill="#b3a9f0" />
    </svg>
  );
}

function InvestmentIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="18" fill="#e5dcfb" />
      <circle cx="26" cy="26" r="12" fill="#b3a9f0" />
      <path d="M26 18v2M26 32v2" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" />
      <path d="M23 22a3 3 0 0 1 6 0c0 3-6 3-6 6h6" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ILLUSTRATION_MAP: Record<QuestionStepId, React.FC> = {
  "q1-role":           RoleIcon,
  "q2-revenue":        RevenueIcon,
  "q3-pain":           PainIcon,
  "q4-scale":          ScaleIcon,
  "q5-attempts":       AttemptsIcon,
  "q6-timeline":       TimelineIcon,
  "q7-ai-familiarity": AIIcon,
  "q8-investment":     InvestmentIcon,
};

export default function QuizIllustration({ stepId }: QuizIllustrationProps) {
  const Icon = ILLUSTRATION_MAP[stepId];
  if (!Icon) return null;

  return (
    <div className="mb-6">
      <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
        <Icon />
      </div>
    </div>
  );
}
