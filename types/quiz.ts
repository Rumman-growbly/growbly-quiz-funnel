// ─── Tier slugs (match /results/[profile] route) ─────────────────────────────
export type TierSlug = "starter" | "growth" | "enterprise";

// ─── Tier scores — accumulated points per tier ────────────────────────────────
export interface TierScores {
  starter: number;
  growth: number;
  enterprise: number;
}

// ─── All step IDs in the quiz flow ───────────────────────────────────────────
export type QuizStepId =
  | "q1-role"
  | "q2-revenue"
  | "q3-pain"
  | "interstitial-1"
  | "q4-scale"
  | "q5-attempts"
  | "email-capture"
  | "interstitial-2"
  | "q6-timeline"
  | "q7-ai-familiarity"
  | "q8-investment"
  | "processing";

// ─── Only the question step IDs (used for answer mapping) ────────────────────
export type QuestionStepId =
  | "q1-role"
  | "q2-revenue"
  | "q3-pain"
  | "q4-scale"
  | "q5-attempts"
  | "q6-timeline"
  | "q7-ai-familiarity"
  | "q8-investment";

// ─── Option definition — includes per-tier score deltas ──────────────────────
export interface QuizOption {
  value: string;
  label: string;
  subtext?: string;
  scores: TierScores;
}

// ─── Step definition (question steps only) ───────────────────────────────────
export interface QuizStepDef {
  id: QuestionStepId;
  question: string;
  subtext?: string;
  options: QuizOption[];
}

// ─── Full answers object (one field per question) ─────────────────────────────
export interface QuizAnswers {
  role: string | null;
  revenue: string | null;
  pain: string | null;
  scale: string | null;
  attempts: string | null;
  timeline: string | null;
  aiFamiliarity: string | null;
  investment: string | null;
}

// ─── Lead data — email captured mid-funnel ───────────────────────────────────
export interface LeadData {
  email: string;
}

// ─── Full submission payload ──────────────────────────────────────────────────
export interface QuizSubmission {
  answers: QuizAnswers;
  lead: LeadData;
  scores: TierScores;
  recommendedTier: TierSlug;
}
