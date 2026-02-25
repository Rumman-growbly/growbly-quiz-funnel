import type {
  QuizAnswers,
  QuizStepId,
  QuizStepDef,
  ProfileSlug,
  PainPoint,
} from "@/types/quiz";

// ─── Static steps (same for all leads) ───────────────────────────────────────

export const STATIC_STEPS: Record<
  Exclude<QuizStepId, "q4-branch" | "q5-branch">,
  QuizStepDef
> = {
  "q1-revenue": {
    id: "q1-revenue",
    question: "How much does your business currently generate per month?",
    subtext: "This helps us tailor your results to where you are right now.",
    type: "single",
    options: [
      { value: "under-10k",  label: "Under $10k" },
      { value: "10k-50k",    label: "$10k – $50k" },
      { value: "50k-100k",   label: "$50k – $100k" },
      { value: "100k-plus",  label: "$100k+ per month" },
    ],
  },
  "q2-business-type": {
    id: "q2-business-type",
    question: "What type of business do you run?",
    subtext: "We'll personalize your results to your industry.",
    type: "single",
    options: [
      { value: "local-service",      label: "Local Service Business" },
      { value: "ecommerce",          label: "E-commerce / Retail" },
      { value: "agency-consulting",  label: "Agency or Consulting" },
      { value: "saas-tech",          label: "SaaS / Tech" },
      { value: "other",              label: "Something else" },
    ],
  },
  "q3-pain-point": {
    id: "q3-pain-point",
    question: "What's your biggest growth blocker right now?",
    subtext: "Be honest — this is the key question that shapes your results.",
    type: "single",
    options: [
      {
        value: "operations",
        label: "My team wastes hours on repetitive manual work",
        subtext: "Data entry, reporting, internal processes",
      },
      {
        value: "sales",
        label: "I can't scale sales without hiring more people",
        subtext: "Lead gen, follow-up, CRM chaos",
      },
      {
        value: "service",
        label: "Customer support and fulfillment is overwhelming us",
        subtext: "Same questions, slow responses, chaotic onboarding",
      },
      {
        value: "delivery",
        label: "Managing delivery and team coordination is breaking down",
        subtext: "Projects, clients, deadlines, quality",
      },
    ],
  },
  "q6-tools": {
    id: "q6-tools",
    question: "Which tools does your business currently use?",
    subtext: "Select all that apply — we'll factor these into your automation plan.",
    type: "multi",
    options: [
      { value: "spreadsheets",       label: "Spreadsheets / Google Sheets" },
      { value: "crm",                label: "CRM (HubSpot, Salesforce…)" },
      { value: "project-management", label: "Project management (Asana…)" },
      { value: "ecommerce-platform", label: "E-commerce platform (Shopify…)" },
      { value: "email-marketing",    label: "Email marketing (Mailchimp…)" },
      { value: "none",               label: "None of these" },
    ],
  },
};

// ─── Branch steps (content changes based on pain point) ──────────────────────

const BRANCH_Q4: Record<PainPoint, QuizStepDef> = {
  operations: {
    id: "q4-branch",
    question: "Which of these takes the most manual work each week?",
    type: "single",
    options: [
      { value: "data-entry-reporting",    label: "Data entry and reporting" },
      { value: "email-management",        label: "Managing emails and inboxes" },
      { value: "scheduling-coordination", label: "Scheduling and coordination" },
      { value: "approvals-workflows",     label: "Internal approvals and workflows" },
    ],
  },
  sales: {
    id: "q4-branch",
    question: "Where does your sales process break down most?",
    type: "single",
    options: [
      { value: "not-enough-leads",      label: "Not enough leads coming in" },
      { value: "leads-go-cold",         label: "Leads go cold before follow-up" },
      { value: "crm-is-a-mess",         label: "CRM is disorganized or unused" },
      { value: "proposals-take-forever",label: "Proposals and quotes take too long" },
    ],
  },
  service: {
    id: "q4-branch",
    question: "What's your biggest customer service challenge?",
    type: "single",
    options: [
      { value: "same-questions",     label: "Answering the same questions repeatedly" },
      { value: "slow-response",      label: "Response times are too slow" },
      { value: "chaotic-onboarding", label: "New client onboarding is chaotic" },
      { value: "tracking-requests",  label: "Tracking client requests is hard" },
    ],
  },
  delivery: {
    id: "q4-branch",
    question: "What slows down your delivery the most?",
    type: "single",
    options: [
      { value: "team-coordination",    label: "Team coordination and communication" },
      { value: "project-tracking",     label: "Project tracking and status updates" },
      { value: "client-communication", label: "Client communication and approvals" },
      { value: "quality-control",      label: "Maintaining quality as you scale" },
    ],
  },
};

const BRANCH_Q5: Record<PainPoint, QuizStepDef> = {
  operations: {
    id: "q5-branch",
    question: "How many hours per week does your team spend on this?",
    type: "single",
    options: [
      { value: "under-5hrs",  label: "Less than 5 hours" },
      { value: "5-15hrs",     label: "5 – 15 hours" },
      { value: "15-30hrs",    label: "15 – 30 hours" },
      { value: "30-plus-hrs", label: "30+ hours" },
    ],
  },
  sales: {
    id: "q5-branch",
    question: "What's your current CRM situation?",
    type: "single",
    options: [
      { value: "using-crm",       label: "We have one and actively use it" },
      { value: "have-not-use",    label: "We have one but barely use it" },
      { value: "spreadsheets-crm",label: "We track leads in spreadsheets" },
      { value: "nothing-crm",     label: "No system at all" },
    ],
  },
  service: {
    id: "q5-branch",
    question: "How quickly do you typically respond to customer inquiries?",
    type: "single",
    options: [
      { value: "under-1hr", label: "Under 1 hour" },
      { value: "same-day",  label: "Same day" },
      { value: "next-day",  label: "Next day" },
      { value: "longer",    label: "Longer than a day" },
    ],
  },
  delivery: {
    id: "q5-branch",
    question: "How large is your team?",
    type: "single",
    options: [
      { value: "solo",    label: "Just me" },
      { value: "2-5",     label: "2 – 5 people" },
      { value: "6-15",    label: "6 – 15 people" },
      { value: "15-plus", label: "15+ people" },
    ],
  },
};

// ─── Public API ───────────────────────────────────────────────────────────────

/** Returns the step definition for Q4 or Q5 based on the current pain branch */
export function getBranchStep(
  stepId: "q4-branch" | "q5-branch",
  painPoint: PainPoint | null
): QuizStepDef {
  const pain = painPoint ?? "operations";
  return stepId === "q4-branch" ? BRANCH_Q4[pain] : BRANCH_Q5[pain];
}

/** Fixed step order — progress indicator is always out of 6 */
const STEP_ORDER: QuizStepId[] = [
  "q1-revenue",
  "q2-business-type",
  "q3-pain-point",
  "q4-branch",
  "q5-branch",
  "q6-tools",
];

/** Returns 0–100 for a linear progress bar if needed */
export function calculateProgress(currentStep: QuizStepId): number {
  const index = STEP_ORDER.indexOf(currentStep);
  return Math.round((index / STEP_ORDER.length) * 100);
}

/** Returns the next step ID, or 'done' after q6-tools */
export function getNextStep(currentStep: QuizStepId): QuizStepId | "done" {
  const index = STEP_ORDER.indexOf(currentStep);
  if (index === -1 || index >= STEP_ORDER.length - 1) return "done";
  return STEP_ORDER[index + 1];
}

/** Returns the previous step ID, or null if already at first */
export function getPrevStep(currentStep: QuizStepId): QuizStepId | null {
  const index = STEP_ORDER.indexOf(currentStep);
  if (index <= 0) return null;
  return STEP_ORDER[index - 1];
}

/** Returns the total number of steps */
export const TOTAL_STEPS = STEP_ORDER.length;

/** Calculates the profile from collected answers */
export function calculateProfile(answers: QuizAnswers): ProfileSlug {
  if (answers.revenue === "under-10k") return "not-yet";

  const profileMap: Record<PainPoint, ProfileSlug> = {
    operations: "scaling-operator",
    sales:      "revenue-ceiling",
    service:    "firefighter",
    delivery:   "bottleneck-builder",
  };

  if (answers.painPoint) return profileMap[answers.painPoint];
  return "scaling-operator";
}

/** True if the lead is $100k+/mo — used to flag high-priority leads */
export function isHighPriority(answers: QuizAnswers): boolean {
  return answers.revenue === "100k-plus";
}
