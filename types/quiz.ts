// ─── Revenue ranges ───────────────────────────────────────────────────────────
export type RevenueRange =
  | "under-10k"
  | "10k-50k"
  | "50k-100k"
  | "100k-plus";

// ─── Business types ───────────────────────────────────────────────────────────
export type BusinessType =
  | "local-service"
  | "ecommerce"
  | "agency-consulting"
  | "saas-tech"
  | "other";

// ─── Pain point branches ──────────────────────────────────────────────────────
export type PainPoint =
  | "operations"
  | "sales"
  | "service"
  | "delivery";

// ─── Result profile slugs (match /results/[profile] route) ───────────────────
export type ProfileSlug =
  | "scaling-operator"
  | "revenue-ceiling"
  | "firefighter"
  | "bottleneck-builder"
  | "not-yet";

// ─── Q4 answers (union of all branches) ──────────────────────────────────────
export type Q4Answer =
  // Operations
  | "data-entry-reporting"
  | "email-management"
  | "scheduling-coordination"
  | "approvals-workflows"
  // Sales
  | "not-enough-leads"
  | "leads-go-cold"
  | "crm-is-a-mess"
  | "proposals-take-forever"
  // Service
  | "same-questions"
  | "slow-response"
  | "chaotic-onboarding"
  | "tracking-requests"
  // Delivery
  | "team-coordination"
  | "project-tracking"
  | "client-communication"
  | "quality-control";

// ─── Q5 answers (union of all branches) ──────────────────────────────────────
export type Q5Answer =
  // Operations
  | "under-5hrs"
  | "5-15hrs"
  | "15-30hrs"
  | "30-plus-hrs"
  // Sales
  | "using-crm"
  | "have-not-use"
  | "spreadsheets-crm"
  | "nothing-crm"
  // Service
  | "under-1hr"
  | "same-day"
  | "next-day"
  | "longer"
  // Delivery
  | "solo"
  | "2-5"
  | "6-15"
  | "15-plus";

// ─── Tool multi-select ────────────────────────────────────────────────────────
export type ToolOption =
  | "spreadsheets"
  | "crm"
  | "project-management"
  | "ecommerce-platform"
  | "email-marketing"
  | "none";

// ─── Full answers object accumulated across all steps ─────────────────────────
export interface QuizAnswers {
  revenue: RevenueRange | null;
  businessType: BusinessType | null;
  painPoint: PainPoint | null;
  q4: Q4Answer | null;
  q5: Q5Answer | null;
  tools: ToolOption[];
}

// ─── Lead capture data ────────────────────────────────────────────────────────
export interface LeadData {
  firstName: string;
  email: string;
}

// ─── Full submission payload ──────────────────────────────────────────────────
export interface QuizSubmission {
  answers: QuizAnswers;
  lead: LeadData;
  profile: ProfileSlug;
  isHighPriority: boolean;
}

// ─── Step IDs (no lead-capture — email collected optionally on results page) ──
export type QuizStepId =
  | "q1-revenue"
  | "q2-business-type"
  | "q3-pain-point"
  | "q4-branch"
  | "q5-branch"
  | "q6-tools";

// ─── Option definition ────────────────────────────────────────────────────────
export interface QuizOption {
  value: string;
  label: string;
  subtext?: string;
}

// ─── Step definition ─────────────────────────────────────────────────────────
export interface QuizStepDef {
  id: QuizStepId;
  question: string;
  subtext?: string;
  type: "single" | "multi";
  options?: QuizOption[];
}
