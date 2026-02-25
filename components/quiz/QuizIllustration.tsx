import type { QuizStepId } from "@/types/quiz";

interface QuizIllustrationProps {
  stepId: QuizStepId;
}

function RevenueIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="32" width="10" height="14" rx="2" fill="#e5dcfb" />
      <rect x="21" y="22" width="10" height="24" rx="2" fill="#b3a9f0" />
      <rect x="38" y="12" width="10" height="34" rx="2" fill="#6455d7" />
      <path d="M9 35 L26 24 L43 14" stroke="#6455d7" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="22" width="36" height="26" rx="3" fill="#e5dcfb" />
      <rect x="16" y="12" width="20" height="14" rx="3" fill="#b3a9f0" />
      <rect x="22" y="32" width="8" height="16" rx="2" fill="#6455d7" />
      <rect x="13" y="27" width="7" height="7" rx="1" fill="#6455d7" />
      <rect x="32" y="27" width="7" height="7" rx="1" fill="#6455d7" />
    </svg>
  );
}

function PainPointIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="10" r="6" fill="#6455d7" />
      <path d="M26 16 L26 26" stroke="#6455d7" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="13" cy="40" r="6" fill="#b3a9f0" />
      <circle cx="39" cy="40" r="6" fill="#b3a9f0" />
      <path d="M26 26 L13 34" stroke="#6455d7" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 26 L39 34" stroke="#6455d7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DiagnosticIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="14" stroke="#6455d7" strokeWidth="2.5" fill="#e5dcfb" />
      <circle cx="22" cy="22" r="7" fill="#b3a9f0" />
      <path d="M32 32 L44 44" stroke="#6455d7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="7" fill="#6455d7" />
      <circle cx="8"  cy="14" r="5" fill="#e5dcfb" stroke="#6455d7" strokeWidth="1.5" />
      <circle cx="44" cy="14" r="5" fill="#e5dcfb" stroke="#6455d7" strokeWidth="1.5" />
      <circle cx="8"  cy="38" r="5" fill="#e5dcfb" stroke="#6455d7" strokeWidth="1.5" />
      <circle cx="44" cy="38" r="5" fill="#e5dcfb" stroke="#6455d7" strokeWidth="1.5" />
      <line x1="13" y1="17" x2="21" y2="22" stroke="#6455d7" strokeWidth="1.5" />
      <line x1="39" y1="17" x2="31" y2="22" stroke="#6455d7" strokeWidth="1.5" />
      <line x1="13" y1="35" x2="21" y2="30" stroke="#6455d7" strokeWidth="1.5" />
      <line x1="39" y1="35" x2="31" y2="30" stroke="#6455d7" strokeWidth="1.5" />
    </svg>
  );
}

const ILLUSTRATION_MAP: Record<QuizStepId, React.FC> = {
  "q1-revenue":       RevenueIcon,
  "q2-business-type": BusinessIcon,
  "q3-pain-point":    PainPointIcon,
  "q4-branch":        DiagnosticIcon,
  "q5-branch":        DiagnosticIcon,
  "q6-tools":         ToolsIcon,
};

export default function QuizIllustration({ stepId }: QuizIllustrationProps) {
  const Icon = ILLUSTRATION_MAP[stepId];

  return (
    <div className="mb-6">
      <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
        <Icon />
      </div>
    </div>
  );
}
