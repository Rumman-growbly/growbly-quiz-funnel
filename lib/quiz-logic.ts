import type {
  QuizAnswers,
  QuizStepId,
  QuizStepDef,
  QuestionStepId,
  TierScores,
  TierSlug,
} from "@/types/quiz";

// ─── All steps in order ───────────────────────────────────────────────────────
export const STEP_ORDER: QuizStepId[] = [
  "q1-role",
  "q2-revenue",
  "q3-pain",
  "interstitial-1",
  "q4-scale",
  "q5-attempts",
  "email-capture",
  "interstitial-2",
  "q6-timeline",
  "q7-ai-familiarity",
  "q8-investment",
  "processing",
];

// ─── Question definitions with embedded tier scores ───────────────────────────
export const QUESTIONS: Record<QuestionStepId, QuizStepDef> = {
  "q1-role": {
    id: "q1-role",
    question: "What's your role in the business?",
    subtext: "This helps us tailor your recommendation to the right level.",
    options: [
      { value: "founder",    label: "Founder / Owner",        scores: { starter: 1, growth: 1, enterprise: 1 } },
      { value: "director",   label: "Director / Manager",     scores: { starter: 0, growth: 1, enterprise: 1 } },
      { value: "operations", label: "Operations / COO",       scores: { starter: 1, growth: 1, enterprise: 0 } },
      { value: "exploring",  label: "Just exploring for now", scores: { starter: 1, growth: 0, enterprise: 0 } },
    ],
  },

  "q2-revenue": {
    id: "q2-revenue",
    question: "What's your current monthly revenue?",
    subtext: "We use this to recommend the right scope for your business.",
    options: [
      { value: "under-50k",  label: "Under £50k / month",       scores: { starter: 1, growth: 0, enterprise: 0 } },
      { value: "50k-100k",   label: "£50k – £100k / month",     scores: { starter: 1, growth: 0, enterprise: 0 } },
      { value: "100k-500k",  label: "£100k – £500k / month",    scores: { starter: 0, growth: 1, enterprise: 0 } },
      { value: "500k-plus",  label: "£500k+ / month",           scores: { starter: 0, growth: 0, enterprise: 1 } },
    ],
  },

  "q3-pain": {
    id: "q3-pain",
    question: "What's the biggest thing holding your business back right now?",
    subtext: "Be honest. This shapes your entire recommendation.",
    options: [
      {
        value: "manual-work",
        label: "Repetitive manual work & admin",
        subtext: "Tasks that eat time but don't require real thinking",
        scores: { starter: 1, growth: 1, enterprise: 0 },
      },
      {
        value: "sales-leads",
        label: "Sales & lead generation",
        subtext: "Not enough leads, or leads going cold before close",
        scores: { starter: 1, growth: 1, enterprise: 0 },
      },
      {
        value: "scale-bottleneck",
        label: "Can't scale without hiring more people",
        subtext: "Growth is limited by team capacity, not demand",
        scores: { starter: 0, growth: 1, enterprise: 1 },
      },
      {
        value: "disconnected-tools",
        label: "Disconnected tools & data silos",
        subtext: "Systems don't talk to each other, data lives everywhere",
        scores: { starter: 0, growth: 1, enterprise: 1 },
      },
      {
        value: "no-visibility",
        label: "No visibility across the business",
        subtext: "Hard to know what's actually happening in real time",
        scores: { starter: 0, growth: 0, enterprise: 1 },
      },
    ],
  },

  "q4-scale": {
    id: "q4-scale",
    question: "How many people are in your business?",
    subtext: "Including full-time, part-time, and contractors.",
    options: [
      { value: "just-me",  label: "Just me",       scores: { starter: 1, growth: 0, enterprise: 0 } },
      { value: "2-5",      label: "2 – 5 people",  scores: { starter: 1, growth: 1, enterprise: 0 } },
      { value: "6-20",     label: "6 – 20 people", scores: { starter: 0, growth: 1, enterprise: 0 } },
      { value: "20-plus",  label: "20+ people",    scores: { starter: 0, growth: 0, enterprise: 1 } },
    ],
  },

  "q5-attempts": {
    id: "q5-attempts",
    question: "Have you tried to automate or systemise anything before?",
    subtext: "No wrong answer. This tells us where to start.",
    options: [
      {
        value: "nothing-yet",
        label: "Haven't tried anything yet",
        scores: { starter: 1, growth: 0, enterprise: 0 },
      },
      {
        value: "tried-tools",
        label: "Tried some tools. Nothing really stuck.",
        scores: { starter: 1, growth: 1, enterprise: 0 },
      },
      {
        value: "hired-someone",
        label: "Hired someone or a consultant to help",
        scores: { starter: 0, growth: 1, enterprise: 1 },
      },
      {
        value: "multiple-attempts",
        label: "Multiple attempts, still struggling",
        scores: { starter: 0, growth: 0, enterprise: 1 },
      },
    ],
  },

  "q6-timeline": {
    id: "q6-timeline",
    question: "What's your timeline for getting this sorted?",
    subtext: "Be realistic. Rushing the wrong solution costs more in the long run.",
    options: [
      { value: "exploring",    label: "Just exploring for now",             scores: { starter: 1, growth: 0, enterprise: 0 } },
      { value: "3-6-months",   label: "Looking to do something in 3–6 months", scores: { starter: 1, growth: 1, enterprise: 0 } },
      { value: "4-6-weeks",    label: "Want this in place in 4–6 weeks",   scores: { starter: 0, growth: 1, enterprise: 1 } },
      { value: "right-now",    label: "I need this sorted right now",      scores: { starter: 0, growth: 0, enterprise: 1 } },
    ],
  },

  "q7-ai-familiarity": {
    id: "q7-ai-familiarity",
    question: "How familiar are you with AI tools?",
    subtext: "This helps us pitch our recommendation at the right level.",
    options: [
      {
        value: "never-used",
        label: "Haven't really used any AI tools",
        scores: { starter: 1, growth: 0, enterprise: 0 },
      },
      {
        value: "experimented",
        label: "Experimented with ChatGPT or similar",
        scores: { starter: 1, growth: 1, enterprise: 0 },
      },
      {
        value: "use-regularly",
        label: "Use a few AI tools regularly",
        scores: { starter: 0, growth: 1, enterprise: 0 },
      },
      {
        value: "have-systems",
        label: "Already have AI systems in place",
        scores: { starter: 0, growth: 0, enterprise: 1 },
      },
    ],
  },

  "q8-investment": {
    id: "q8-investment",
    question: "How are you thinking about investment in this?",
    subtext: "Honest answers lead to better recommendations.",
    options: [
      {
        value: "start-small",
        label: "Want to start small and test first",
        scores: { starter: 1, growth: 0, enterprise: 0 },
      },
      {
        value: "ready-if-roi",
        label: "Ready to invest if the ROI is clear",
        scores: { starter: 0, growth: 1, enterprise: 0 },
      },
      {
        value: "budget-not-issue",
        label: "Budget isn't the constraint. Results are.",
        scores: { starter: 0, growth: 0, enterprise: 1 },
      },
      {
        value: "not-sure",
        label: "Not sure yet",
        scores: { starter: 1, growth: 0, enterprise: 0 },
      },
    ],
  },
};

// ─── Answer field map ─────────────────────────────────────────────────────────
export const ANSWER_FIELD: Record<QuestionStepId, keyof QuizAnswers> = {
  "q1-role":           "role",
  "q2-revenue":        "revenue",
  "q3-pain":           "pain",
  "q4-scale":          "scale",
  "q5-attempts":       "attempts",
  "q6-timeline":       "timeline",
  "q7-ai-familiarity": "aiFamiliarity",
  "q8-investment":     "investment",
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export function getNextStep(current: QuizStepId): QuizStepId | "done" {
  const i = STEP_ORDER.indexOf(current);
  if (i === -1 || i >= STEP_ORDER.length - 1) return "done";
  return STEP_ORDER[i + 1];
}

export function getPrevStep(current: QuizStepId): QuizStepId | null {
  const i = STEP_ORDER.indexOf(current);
  if (i <= 0) return null;
  return STEP_ORDER[i - 1];
}

// ─── Progress bar number (1–8 for question steps, frozen at last Q for specials)
export function getEffectiveQuestionNumber(stepId: QuizStepId): number {
  const map: Record<QuizStepId, number> = {
    "q1-role":           1,
    "q2-revenue":        2,
    "q3-pain":           3,
    "interstitial-1":    3,
    "q4-scale":          4,
    "q5-attempts":       5,
    "email-capture":     5,
    "interstitial-2":    5,
    "q6-timeline":       6,
    "q7-ai-familiarity": 7,
    "q8-investment":     8,
    "processing":        9, // > 8 = all segments complete
  };
  return map[stepId] ?? 1;
}

export const TOTAL_QUESTIONS = 8;

// ─── Scoring ──────────────────────────────────────────────────────────────────
export function calculateScores(answers: QuizAnswers): TierScores {
  const scores: TierScores = { starter: 0, growth: 0, enterprise: 0 };

  const fieldToStep: Array<[keyof QuizAnswers, QuestionStepId]> = [
    ["role",          "q1-role"],
    ["revenue",       "q2-revenue"],
    ["pain",          "q3-pain"],
    ["scale",         "q4-scale"],
    ["attempts",      "q5-attempts"],
    ["timeline",      "q6-timeline"],
    ["aiFamiliarity", "q7-ai-familiarity"],
    ["investment",    "q8-investment"],
  ];

  for (const [field, stepId] of fieldToStep) {
    const value = answers[field];
    if (!value) continue;
    const option = QUESTIONS[stepId].options.find((o) => o.value === value);
    if (option) {
      scores.starter    += option.scores.starter;
      scores.growth     += option.scores.growth;
      scores.enterprise += option.scores.enterprise;
    }
  }

  return scores;
}

// ─── Tier calculation with tiebreakers ───────────────────────────────────────
export function calculateTier(scores: TierScores): TierSlug {
  const { starter, growth, enterprise } = scores;
  const max = Math.max(starter, growth, enterprise);

  const atMax = {
    starter:    starter    === max,
    growth:     growth     === max,
    enterprise: enterprise === max,
  };

  const tieCount = [atMax.starter, atMax.growth, atMax.enterprise].filter(Boolean).length;

  // Clear winner
  if (tieCount === 1) {
    if (atMax.enterprise) return "enterprise";
    if (atMax.growth)     return "growth";
    return "starter";
  }

  // Tiebreakers from spec
  if (tieCount === 3)                           return "growth";     // 3-way → Growth
  if (atMax.starter    && atMax.growth)         return "growth";     // S/G → Growth
  if (atMax.growth     && atMax.enterprise)     return "enterprise"; // G/E → Enterprise
  if (atMax.starter    && atMax.enterprise)     return "growth";     // S/E → Growth

  return "growth"; // fallback
}

// ─── Helper: is this a question step? ────────────────────────────────────────
export function isQuestionStep(stepId: QuizStepId): stepId is QuestionStepId {
  return stepId in QUESTIONS;
}
