import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";
import { Resend } from "resend";
import type { QuizSubmission } from "@/types/quiz";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "rumman@growbly.digital";
const CALENDLY_URL = "https://calendly.com/rumman-growbly/quick-checkup";

const tierContent: Record<string, { title: string; tagline: string; body: string; outcomes: string[] }> = {
  starter: {
    title: "Starter Package",
    tagline: "Your single highest-cost workflow automated. 10–15 hours back per week.",
    body: "Based on your answers, one well-built automation can completely change how your week feels. We'll identify your biggest time drain and eliminate it.",
    outcomes: [
      "10–15 hours back every week from week one",
      "One fully engineered AI automation built around your workflow",
      "A clear foundation ready to scale from",
    ],
  },
  growth: {
    title: "Growth Package",
    tagline: "Your systems connected. The manual handoffs eliminated.",
    body: "You have the revenue. The systems just haven't caught up. We'll build 3–5 targeted automations that connect the parts of your business currently held together by manual effort.",
    outcomes: [
      "3–5 connected automations across your core workflows",
      "The manual glue between your tools eliminated",
      "20–30 hours per week returned to your team",
    ],
  },
  enterprise: {
    title: "Enterprise Package",
    tagline: "Full-scale automation infrastructure built for your level of complexity.",
    body: "At your scale, complexity compounds every month. We build comprehensive automation infrastructure that matches your operation, not a generic solution.",
    outcomes: [
      "Comprehensive automation strategy across your full operation",
      "Custom-built infrastructure that scales with you",
      "Dedicated support and ongoing optimisation",
    ],
  },
};

function buildLeadEmail(tier: string, email: string): string {
  const content = tierContent[tier] ?? tierContent.growth;
  const outcomesHtml = content.outcomes
    .map((o) => `<li style="margin-bottom:10px;color:#374151;">${o}</li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1E0A3C 0%,#3b0764 100%);padding:40px 40px 32px;text-align:center;">
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#a78bfa;">Growbly · AI Automation</p>
            <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;line-height:1.3;">Your AI Assessment<br>Results Are In</h1>
            <p style="margin:16px 0 0;font-size:15px;color:#c4b5fd;">Here is your personalised automation recommendation.</p>
          </td>
        </tr>

        <!-- Tier Badge -->
        <tr>
          <td style="padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ff;border-left:4px solid #5B21B6;border-radius:0 8px 8px 0;padding:20px;">
              <tr>
                <td style="padding:20px;">
                  <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5B21B6;">Your Recommendation</p>
                  <h2 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#1E0A3C;">${content.title}</h2>
                  <p style="margin:0;font-size:15px;color:#4B5563;">${content.tagline}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body copy -->
        <tr>
          <td style="padding:24px 40px 0;">
            <p style="margin:0;font-size:16px;line-height:1.7;color:#374151;">${content.body}</p>
          </td>
        </tr>

        <!-- Outcomes -->
        <tr>
          <td style="padding:24px 40px 0;">
            <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1E0A3C;">What this means for you</p>
            <ul style="margin:0;padding-left:20px;line-height:1.8;">
              ${outcomesHtml}
            </ul>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:32px 40px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#1E0A3C;border-radius:12px;">
              <tr>
                <td style="padding:32px;text-align:center;">
                  <p style="margin:0 0 8px;font-size:18px;font-weight:700;color:#ffffff;">Ready to see exactly what we'd build for you?</p>
                  <p style="margin:0 0 24px;font-size:14px;color:#c4b5fd;line-height:1.6;">Book a free 30-minute strategy call. No pitch — just a clear plan for your specific operation.</p>
                  <a href="${CALENDLY_URL}" style="display:inline-block;background:#5B21B6;color:#ffffff;font-size:16px;font-weight:700;padding:16px 36px;border-radius:8px;text-decoration:none;letter-spacing:0.01em;">Book Your Free Strategy Call →</a>
                  <p style="margin:16px 0 0;font-size:12px;color:#6B7280;">Free · No obligation · 30 minutes</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="border-top:1px solid #e5e7eb;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9CA3AF;">Growbly · AI Automation Agency · growbly.digital</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildOwnerEmail(
  tier: string,
  email: string,
  answers: Record<string, string>,
  scores: Record<string, number>
): string {
  const rows = [
    ["Email", email],
    ["Tier", tier.toUpperCase()],
    ["Role", answers.role ?? ""],
    ["Revenue", answers.revenue ?? ""],
    ["Pain point", answers.pain ?? ""],
    ["Team size", answers.scale ?? ""],
    ["Timeline", answers.timeline ?? ""],
    ["AI familiarity", answers.aiFamiliarity ?? ""],
    ["Investment", answers.investment ?? ""],
    ["Scores", `Starter: ${scores.starter} / Growth: ${scores.growth} / Enterprise: ${scores.enterprise}`],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;white-space:nowrap;">${k}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${v}</td></tr>`
    )
    .join("");

  return `<div style="font-family:sans-serif;max-width:600px;">
  <h2 style="color:#1E0A3C;">New Lead — ${tier.toUpperCase()} tier</h2>
  <table style="border-collapse:collapse;width:100%;">${rows}</table>
  <p style="margin-top:20px;"><a href="${CALENDLY_URL}" style="color:#5B21B6;">Check Calendly for bookings</a></p>
</div>`;
}

export async function POST(req: NextRequest) {
  let body: QuizSubmission;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { answers, lead, scores, recommendedTier } = body;

  if (!lead?.email || !recommendedTier) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // 1. Insert into Supabase (best-effort)
  try {
    const supabase = createClient();
    await supabase.from("leads").insert({
      email:                lead.email,
      role:                 answers.role,
      monthly_revenue:      answers.revenue,
      pain_point:           answers.pain,
      people_affected:      answers.scale,
      previous_attempts:    answers.attempts,
      timeline:             answers.timeline,
      ai_familiarity:       answers.aiFamiliarity,
      investment_readiness: answers.investment,
      starter_score:        scores.starter,
      growth_score:         scores.growth,
      enterprise_score:     scores.enterprise,
      recommended_tier:     recommendedTier,
      quiz_answers:         answers,
      submitted_at:         new Date().toISOString(),
    });
  } catch (err) {
    console.error("[submit-quiz] Supabase insert failed:", err);
  }

  // 2. Send emails via Resend (fire-and-forget)
  Promise.all([
    resend.emails.send({
      from: "Growbly <rumman@growbly.digital>",
      to: lead.email,
      subject: "Your AI Automation Results — Growbly",
      html: buildLeadEmail(recommendedTier, lead.email),
    }),
    resend.emails.send({
      from: "Growbly <rumman@growbly.digital>",
      to: OWNER_EMAIL,
      subject: `New Lead: ${recommendedTier} tier — ${lead.email}`,
      html: buildOwnerEmail(recommendedTier, lead.email, answers as unknown as Record<string, string>, scores as unknown as Record<string, number>),
    }),
  ]).catch((err) => console.error("[submit-quiz] Resend failed:", err));

  return NextResponse.json({ success: true, tier: recommendedTier }, { status: 200 });
}
