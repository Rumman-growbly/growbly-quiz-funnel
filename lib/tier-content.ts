import type { TierSlug } from "@/types/quiz";

export interface TierContent {
  slug: TierSlug;
  tag: string;
  price: string;
  accentHex: string;
  headline: string;
  subheadline: string;
  body: string;
  includes: string[];
  testimonial: {
    quote: string;
    author: string;
    company: string;
    metric: string;
  };
  ctaHeadline: string;
  ctaSubheadline: string;
  ctaButton: string;
  ctaSmallPrint: string;
}

export const tiers: Record<TierSlug, TierContent> = {
  starter: {
    slug: "starter",
    tag: "Starter Package",
    price: "£3,000",
    accentHex: "#059669",
    headline: "You're ready for your first high-impact automation.",
    subheadline:
      "Based on your answers, a focused single-automation build is the highest-ROI move for your business right now.",
    body:
      "You don't need a complex system yet — you need one thing done exceptionally well. We'll identify your single biggest time-drain, build a custom AI automation around it, and hand it over fully live and tested. Most clients recover the cost within 60 days.",
    includes: [
      "One fully custom AI automation",
      "Discovery session & workflow audit",
      "Integration with your existing tools",
      "30-day support & optimisation",
    ],
    testimonial: {
      quote:
        "I was sceptical it would be worth it at my stage. Three weeks later I had 12 hours back every week. It was the easiest decision I've made.",
      author: "Sophie R.",
      company: "Founder, Marketing Agency",
      metric: "12 hrs/week recovered",
    },
    ctaHeadline: "Ready to get your first automation live?",
    ctaSubheadline:
      "Book a free 30-minute strategy call. We'll scope your first automation and tell you exactly what we'd build.",
    ctaButton: "Book Your Free Call",
    ctaSmallPrint: "Free · No obligation · 30 minutes",
  },

  growth: {
    slug: "growth",
    tag: "Growth Package",
    price: "£6,000",
    accentHex: "#5B21B6",
    headline: "You're ready to build your automation engine.",
    subheadline:
      "Based on your answers, you need more than one workflow fixed — you need a connected system that removes bottlenecks across your operation.",
    body:
      "You've hit the stage where single-point fixes don't move the needle. You need your tools talking to each other, your team freed from repetitive work across departments, and real visibility into what's happening. The Growth Package builds that: a multi-system automation engine, custom-built around your business.",
    includes: [
      "3 connected AI automations",
      "Full operations audit & priority mapping",
      "System integration & data sync across tools",
      "Custom reporting dashboard",
      "60-day support & iteration",
    ],
    testimonial: {
      quote:
        "We went from drowning in manual work to running a business that actually feels under control. Three automations changed everything.",
      author: "James T.",
      company: "Operations Director, B2B Services",
      metric: "3× capacity, same team",
    },
    ctaHeadline: "Ready to build your automation engine?",
    ctaSubheadline:
      "Book a free 30-minute strategy call. We'll map your biggest bottlenecks and show you exactly what we'd automate first.",
    ctaButton: "Book Your Free Call",
    ctaSmallPrint: "Free · No obligation · 30 minutes",
  },

  enterprise: {
    slug: "enterprise",
    tag: "Enterprise Package",
    price: "£12,000+",
    accentHex: "#1E0A3C",
    headline: "You're ready for enterprise-grade AI infrastructure.",
    subheadline:
      "Based on your answers, you need a comprehensive, bespoke automation system — something built exactly for how your business operates at scale.",
    body:
      "At your level, you've likely already tried the off-the-shelf solutions. What you need is custom AI infrastructure: agents that work end-to-end across your business, systems that scale with your growth, and a partner who understands your operation at a strategic level. The Enterprise Package starts with a full operational audit and builds from there.",
    includes: [
      "Unlimited automation scope",
      "Full operational audit & systems review",
      "Custom AI agent deployment",
      "Priority support & ongoing iteration",
      "Dedicated project manager",
      "Quarterly strategy reviews",
    ],
    testimonial: {
      quote:
        "They didn't just build automations — they rethought our entire operation. We scaled to 40 clients without adding a single ops hire.",
      author: "David R.",
      company: "CEO, Consulting Firm",
      metric: "3.3× client capacity",
    },
    ctaHeadline: "Let's build your enterprise automation stack.",
    ctaSubheadline:
      "Book a free 30-minute call with our senior team. We'll review your operation and outline exactly what we'd build.",
    ctaButton: "Book Your Free Call",
    ctaSmallPrint: "Free · No obligation · 30 minutes",
  },
};
