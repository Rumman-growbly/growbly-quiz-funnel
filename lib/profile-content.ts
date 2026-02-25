import type { ProfileSlug } from "@/types/quiz";

export interface Recommendation {
  title: string;
  description: string;
  icon: string; // Heroicon name (outline)
}

export interface SocialProof {
  quote: string;
  author: string;
  company: string;
  metric: string;
}

export interface ProfileContent {
  slug: ProfileSlug;
  name: string;
  tagline: string;
  badgeColor: string;       // Tailwind bg class
  badgeBorder: string;      // Tailwind border class
  diagnosisTemplate: string;
  recommendations: Recommendation[];
  socialProof: SocialProof;
  ctaPrimary: string;
  ctaSecondary: string;
  notYet: boolean;
}

export const profiles: Record<ProfileSlug, ProfileContent> = {
  "scaling-operator": {
    slug: "scaling-operator",
    name: "The Scaling Operator",
    tagline: "Your biggest asset is being wasted on manual work",
    badgeColor: "bg-blue-50",
    badgeBorder: "border-blue-200",
    diagnosisTemplate:
      "Your team is spending real hours every week on work that should be running automatically in the background. You're not short on hustle — you're short on leverage. The manual processes eating your time aren't just inefficient, they're actively capping how fast you can grow.",
    recommendations: [
      {
        title: "Automated Reporting Dashboards",
        description:
          "Pull live data from all your tools into one dashboard. No more manual exports, no more weekly reporting emails — everything updates itself.",
        icon: "ChartBarIcon",
      },
      {
        title: "Internal Workflow Automation",
        description:
          "Approvals, handoffs, and internal processes that currently live in Slack threads or email chains get automated with clear triggers and audit trails.",
        icon: "ArrowsRightLeftIcon",
      },
      {
        title: "Cross-Tool Data Sync",
        description:
          "Your CRM, project management, and spreadsheets talk to each other automatically. One source of truth — always current, always accurate.",
        icon: "ServerStackIcon",
      },
    ],
    socialProof: {
      quote:
        "We got back 18 hours per week in the first month. The team was genuinely shocked at how much was being wasted.",
      author: "Marcus T.",
      company: "Operations Director, B2B Services",
      metric: "18 hrs/week recovered",
    },
    ctaPrimary: "Book Your Free Strategy Call",
    ctaSecondary: "See how we build this",
    notYet: false,
  },

  "revenue-ceiling": {
    slug: "revenue-ceiling",
    name: "The Revenue Ceiling",
    tagline: "You've hit the limit of what manual sales can do",
    badgeColor: "bg-green-50",
    badgeBorder: "border-green-200",
    diagnosisTemplate:
      "Your sales team is the bottleneck — not because they're underperforming, but because you're asking humans to do what systems should handle. Lead follow-up, CRM hygiene, pipeline updates — these are automation problems, not hiring problems. Every lead that goes cold is revenue that should have been yours.",
    recommendations: [
      {
        title: "AI-Powered Outreach Sequences",
        description:
          "Personalized multi-touch outreach that runs on autopilot. Leads get timely, relevant follow-ups without your team lifting a finger after setup.",
        icon: "EnvelopeOpenIcon",
      },
      {
        title: "CRM Pipeline Automation",
        description:
          "Deals move through stages automatically. Stalled deals get flagged. Your CRM becomes a tool your team actually uses — not one they avoid.",
        icon: "FunnelIcon",
      },
      {
        title: "Lead Scoring + Follow-Up Engine",
        description:
          "Hot leads get immediate attention. Cold leads go into nurture sequences. Every lead gets exactly the right treatment at exactly the right time.",
        icon: "StarIcon",
      },
    ],
    socialProof: {
      quote:
        "Our close rate went up 34% because we stopped letting leads go cold. The system follows up better than we ever did manually.",
      author: "Jennifer K.",
      company: "Founder, SaaS Company",
      metric: "34% higher close rate",
    },
    ctaPrimary: "Book Your Free Strategy Call",
    ctaSecondary: "See how we build this",
    notYet: false,
  },

  firefighter: {
    slug: "firefighter",
    name: "The Firefighter",
    tagline: "Reactive support is killing your capacity to grow",
    badgeColor: "bg-orange-50",
    badgeBorder: "border-orange-200",
    diagnosisTemplate:
      "You're scaling revenue but your service delivery is absorbing all the gains. Every new client means more tickets, more questions, more coordination — and it's eating your team alive. The fix isn't more support staff. Every hour your team spends on reactive customer work is an hour not spent on growth.",
    recommendations: [
      {
        title: "AI Customer Support Layer",
        description:
          "An AI agent handles your most common questions 24/7 — freeing your team to focus on complex, high-value client interactions that actually need a human.",
        icon: "CpuChipIcon",
      },
      {
        title: "Client Onboarding Automation",
        description:
          "New clients get a seamless, consistent onboarding experience automatically — intake forms, welcome sequences, access provisioning, all in order.",
        icon: "UserPlusIcon",
      },
      {
        title: "Smart Request Routing",
        description:
          "Requests are automatically categorized, prioritized, and routed to the right person. Nothing falls through the cracks. Response times drop overnight.",
        icon: "QueueListIcon",
      },
    ],
    socialProof: {
      quote:
        "We onboard 3x more clients with the same team. The automated onboarding alone saves us 6 hours per new client.",
      author: "Sarah M.",
      company: "Agency Owner",
      metric: "3x client capacity",
    },
    ctaPrimary: "Book Your Free Strategy Call",
    ctaSecondary: "See how we build this",
    notYet: false,
  },

  "bottleneck-builder": {
    slug: "bottleneck-builder",
    name: "The Bottleneck Builder",
    tagline: "Delivery is breaking under the weight of growth",
    badgeColor: "bg-purple-50",
    badgeBorder: "border-purple-200",
    diagnosisTemplate:
      "You're winning the clients but the delivery side is straining. Team coordination happens in too many places, client communication is inconsistent, and tracking what's actually done requires too much manual effort. You're not failing at delivery — you're outgrowing your infrastructure.",
    recommendations: [
      {
        title: "Project Coordination Automation",
        description:
          "Tasks get assigned, deadlines get tracked, and blockers get flagged automatically. Your team always knows what's next — without a status meeting.",
        icon: "ClipboardDocumentCheckIcon",
      },
      {
        title: "Client Update Workflows",
        description:
          "Clients get automated status updates at key milestones. No more chasing your team for updates to pass along. Clients feel informed without extra work.",
        icon: "MegaphoneIcon",
      },
      {
        title: "Delivery Tracking Dashboard",
        description:
          "One live view of every active project, every client, every deadline — built from your existing tools. No new software required.",
        icon: "PresentationChartLineIcon",
      },
    ],
    socialProof: {
      quote:
        "We scaled from 12 to 40 clients without a single new operations hire. The infrastructure did the work of 3 people.",
      author: "David R.",
      company: "CEO, Consulting Firm",
      metric: "3.3x clients, same ops team",
    },
    ctaPrimary: "Book Your Free Strategy Call",
    ctaSecondary: "See how we build this",
    notYet: false,
  },

  "not-yet": {
    slug: "not-yet",
    name: "Almost Ready",
    tagline: "You're building the right foundations",
    badgeColor: "bg-gray-100",
    badgeBorder: "border-gray-200",
    diagnosisTemplate:
      "Based on where your business is right now, a full custom automation system would be getting ahead of the curve — and that's actually a good sign. It means you're thinking about scale before most people do. Right now, the highest ROI move is building consistent, repeatable processes so that when you're ready to automate, everything multiplies.",
    recommendations: [
      {
        title: "What to Build Before You Automate",
        description:
          "Automation works best on consistent, repeatable processes. Focus on making your core workflows consistent first — then automation makes them instant.",
        icon: "ClockIcon",
      },
      {
        title: "Start Documenting Now",
        description:
          "Begin tracking your most time-consuming tasks. When you're ready for automation, this becomes the blueprint for your entire system — and saves weeks of planning.",
        icon: "DocumentTextIcon",
      },
      {
        title: "Get the Free Automation Guide",
        description:
          "We'll send you our guide: 'The 5 Automations Every $50k/mo Business Should Have' — so you know exactly what to build when the time is right.",
        icon: "EnvelopeIcon",
      },
    ],
    socialProof: {
      quote:
        "I came back 6 months later when we crossed $60k/mo. They knew exactly what we needed and we were up and running in 3 weeks.",
      author: "Alex W.",
      company: "Founder",
      metric: "",
    },
    ctaPrimary: "Get the Free Automation Guide",
    ctaSecondary: "Talk to us anyway",
    notYet: true,
  },
};
