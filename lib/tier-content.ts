import type { TierSlug } from "@/types/quiz";

export interface TierContent {
  slug: TierSlug;
  tag: string;
  price: string;
  accentHex: string;
  headline: string;
  subheadline: string;
  body: string;
  outcomes: string[];
  includes: string[];
  whatThisMeansForYou: string[];
  outcomeBlock: string;
  ctaHeadline: string;
  ctaSubheadline: string;
  ctaButton: string;
  ctaSmallPrint: string;
}

export const tiers: Record<TierSlug, TierContent> = {
  starter: {
    slug: "starter",
    tag: "STARTER PACKAGE · RECOMMENDED FOR YOU",
    price: "£3,000",
    accentHex: "#059669",

    headline: "Every week you wait, you're paying with your time.",

    subheadline:
      "You already know which tasks are draining your week. You just haven't had the right system to fix them yet.",

    body:
      "We find the single process costing you the most time, build a custom AI automation around it, and hand it over fully live and tested. Most clients get 10 to 15 hours back every week. The full cost pays for itself within 60 days.",

    outcomes: [
      "Stop doing the same task manually every single day",
      "Get 10 to 15 hours back every week, starting from week one",
      "Reclaim the mental energy you\u2019ve been spending on work that never should have been yours",
      "Scale to the next level without burning out first",
    ],

    includes: [
      "1 fully engineered AI automation targeting your highest-cost workflow",
      "Deep-dive discovery session to pinpoint your biggest ROI opportunity",
      "Seamless integration with your current tech stack, zero disruption",
      "30-day dedicated support and performance optimisation post-launch",
    ],

    whatThisMeansForYou: [
      "No more manually doing work a system should handle",
      "Processes run in the background while you focus on growth",
      "You see exactly what automation can do before committing to more",
      "A foundation in place ready to scale when you are",
    ],

    outcomeBlock:
      "You don\u2019t need to automate everything. You just need to automate the right thing first. We\u2019ve done this for dozens of businesses, and the first automation always changes how the whole business feels to run.",

    ctaHeadline: "Let\u2019s find your biggest time drain and kill it.",
    ctaSubheadline:
      "Free 30-minute call. We\u2019ll identify your highest-ROI automation and tell you exactly what we\u2019d build. No fluff, no hard sell.",
    ctaButton: "Book Your Free Call",
    ctaSmallPrint: "Free \u00b7 No obligation \u00b7 30 minutes",
  },

  growth: {
    slug: "growth",
    tag: "GROWTH PACKAGE · RECOMMENDED FOR YOU",
    price: "£6,000",
    accentHex: "#5B21B6",

    headline: "You have the revenue. The systems just have not caught up.",

    subheadline:
      "At your stage, the problem isn\u2019t effort. Your team is working hard. The problem is that too much of that effort is going into work that should be automated.",

    body:
      "The Growth plan connects the parts of your business that are currently held together by manual effort. Three to five targeted automations, fully integrated, built around how your business actually works.",

    outcomes: [
      "Every hour your team works goes toward revenue, not repetitive admin",
      "Never lose a lead, a follow-up, or a deadline to a manual process again",
      "The confidence that things are running properly without you having to check",
      "Grow revenue without your costs growing at the same rate",
    ],

    includes: [
      "3 to 5 interconnected AI automations across your critical workflows",
      "Full operational audit to identify every leak in your business system",
      "End-to-end integration across your entire tool stack",
      "3 months of dedicated support, iteration and performance tuning",
      "Optional real-time operations dashboard, built to your exact needs",
    ],

    whatThisMeansForYou: [
      "Your business runs on systems, not on people doing repetitive tasks",
      "Every core workflow connected, nothing falling between the gaps",
      "Full visibility across operations without chasing updates manually",
      "A business that scales without getting harder to manage",
    ],

    outcomeBlock:
      "Most businesses at this stage don\u2019t need more people. They need better systems. Once the right automations are in place, the business starts running the way you always intended it to.",

    ctaHeadline: "Let\u2019s build the system your business actually needs.",
    ctaSubheadline:
      "Free 30-minute call. We\u2019ll map your biggest operational leaks and show you exactly what we\u2019d fix first.",
    ctaButton: "Book Your Free Call",
    ctaSmallPrint: "Free \u00b7 No obligation \u00b7 30 minutes",
  },

  enterprise: {
    slug: "enterprise",
    tag: "ENTERPRISE PACKAGE · RECOMMENDED FOR YOU",
    price: "£12,000+",
    accentHex: "#1E0A3C",

    headline:
      "You\u2019ve outgrown how you operate. Now your operations need to catch up.",

    subheadline:
      "You have the revenue, the team, and the ambition. What you don\u2019t have is an infrastructure built to match all three.",

    body:
      "The Enterprise plan is a full operational overhaul. We audit every core workflow, identify where complexity is killing your speed, and build a connected system that runs the business the way you always intended it to.",

    outcomes: [
      "Know exactly what is happening across every part of your business, in real time",
      "Make faster decisions than your competitors because your data is clean, connected and live",
      "Cut the operational drag that is quietly limiting how fast you can move",
      "Grow to the next revenue level without rebuilding everything again to get there",
    ],

    includes: [
      "6 to 10 fully engineered AI automations across your most critical operations",
      "Complete operational audit to map every workflow, bottleneck and revenue leak",
      "End-to-end system architecture built from the ground up around your business",
      "Full integration across your entire tech stack, everything connected and talking",
      "Real-time custom dashboard giving you complete visibility across the whole business",
      "3 months of dedicated priority support, iteration and performance tuning post-launch",
    ],

    whatThisMeansForYou: [
      "A business that scales on infrastructure, not on individual effort",
      "Decisions made on live data, not last week\u2019s spreadsheet",
      "Every core process running to a consistent standard, every single day",
      "An operation built to carry you to the next level, and the one after that",
    ],

    outcomeBlock:
      "Most businesses at your scale are one bad month or one key person leaving away from exposing how fragile the operation really is. The Enterprise plan fixes that permanently. You get an infrastructure that holds up under pressure, gives you full visibility, and is built to scale with you.",

    ctaHeadline: "Let\u2019s rebuild how your business operates.",
    ctaSubheadline:
      "Free 30-minute call. We\u2019ll audit your current operations and show you exactly where the biggest gains are hiding.",
    ctaButton: "Book Your Free Call",
    ctaSmallPrint: "Free \u00b7 No obligation \u00b7 30 minutes",
  },
};
