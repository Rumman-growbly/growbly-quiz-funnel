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

interface TierAccent {
  hex: string;
  rgbaLight: string; // 0.10 opacity — badge bg
  rgbaMid: string;   // 0.13 opacity — icon bg
  rgbaBorder: string; // 0.27 opacity — borders
}

const tierAccent: Record<string, TierAccent> = {
  starter:    { hex: "#059669", rgbaLight: "rgba(5,150,105,0.10)",   rgbaMid: "rgba(5,150,105,0.13)",   rgbaBorder: "rgba(5,150,105,0.27)"   },
  growth:     { hex: "#7c3aed", rgbaLight: "rgba(124,58,237,0.10)",  rgbaMid: "rgba(124,58,237,0.13)",  rgbaBorder: "rgba(124,58,237,0.27)"  },
  enterprise: { hex: "#2563eb", rgbaLight: "rgba(37,99,235,0.10)",   rgbaMid: "rgba(37,99,235,0.13)",   rgbaBorder: "rgba(37,99,235,0.27)"   },
};

// Bar inner width in px: 560px card - 80px padding - 40px score card padding - 8px bar padding = 432px
const BAR_WIDTH_PX = 432;

function buildLeadEmail(tier: string, email: string, scores: Record<string, number>): string {
  const content = tierContent[tier] ?? tierContent.growth;
  const accent = tierAccent[tier] ?? tierAccent.growth;
  const tierScore = scores[tier] ?? 0;
  const maxScore = 40;
  const scorePct = Math.min(Math.round((tierScore / maxScore) * 100), 100);
  const filledPx = Math.round((scorePct / 100) * BAR_WIDTH_PX);
  const emptyPx = BAR_WIDTH_PX - filledPx;

  const outcomesHtml = content.outcomes
    .map(
      (o) => `
      <tr>
        <td style="padding:0 0 16px 0;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="width:28px;vertical-align:top;padding-top:1px;">
                <table cellpadding="0" cellspacing="0" style="width:20px;height:20px;border-radius:50%;background:${accent.rgbaMid};">
                  <tr><td style="text-align:center;font-size:11px;font-weight:700;color:${accent.hex};line-height:20px;">&#10003;</td></tr>
                </table>
              </td>
              <td style="font-size:15px;color:#d1d5db;line-height:1.5;">${o}</td>
            </tr>
          </table>
        </td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <style type="text/css">
    :root { color-scheme: dark; }
    body { background-color: #09090f !important; margin: 0 !important; padding: 0 !important; }
    .bg-outer { background-color: #09090f !important; }
    .card-main { background-color: #13111f !important; border: 1px solid #1f1b35 !important; }
    .card-score { background-color: #0d0b1a !important; }
    .card-rec { background-color: #0d0b1a !important; }
    .bar-track { background-color: #1f1b35 !important; }
    .divider { background-color: #1f1b35 !important; }
  </style>
</head>
<body style="margin:0;padding:0;background:#09090f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" class="bg-outer" style="background:#09090f;padding:40px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Logo row -->
        <tr>
          <td style="padding:0 0 24px;text-align:center;">
            <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#6b21a8;">GROWBLY</p>
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td class="card-main" style="background:#13111f;border-radius:20px;overflow:hidden;border:1px solid #1f1b35;">

            <!-- Header gradient -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:linear-gradient(160deg,#1E0A3C 0%,#2e1065 50%,#1a0533 100%);padding:44px 40px 36px;text-align:center;">
                  <p style="margin:0 0 16px;display:inline-block;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#a78bfa;background:rgba(255,255,255,0.08);padding:6px 14px;border-radius:20px;border:1px solid rgba(255,255,255,0.13);">AI Readiness Assessment</p>
                  <h1 style="margin:0 0 12px;font-size:30px;font-weight:800;color:#ffffff;line-height:1.25;letter-spacing:-0.02em;">Your results are in,<br>and they're specific.</h1>
                  <p style="margin:0;font-size:15px;color:#c4b5fd;line-height:1.6;">Based on your 8 answers, here is your personalised automation plan.</p>
                </td>
              </tr>
            </table>

            <!-- Score bar -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:28px 40px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" class="card-score" style="background:#0d0b1a;border-radius:12px;padding:20px;">
                    <tr>
                      <td style="padding:20px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td>
                              <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">Automation fit score</p>
                              <p style="margin:0;font-size:26px;font-weight:800;color:#ffffff;">${tierScore}<span style="font-size:14px;font-weight:400;color:#6b7280;"> / ${maxScore}</span></p>
                            </td>
                            <td style="text-align:right;vertical-align:middle;">
                              <table cellpadding="0" cellspacing="0" style="display:inline-table;background:${accent.rgbaLight};border-radius:20px;border:1px solid ${accent.rgbaBorder};">
                                <tr><td style="padding:4px 12px;font-size:12px;font-weight:700;color:${accent.hex};white-space:nowrap;">${tier.charAt(0).toUpperCase() + tier.slice(1)} fit</td></tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="padding-top:14px;">
                              <table width="${BAR_WIDTH_PX}" cellpadding="0" cellspacing="0" class="bar-track" style="background:#1f1b35;border-radius:6px;">
                                <tr>
                                  <td width="${filledPx}" height="8" style="background:${accent.hex};border-radius:6px;font-size:0;line-height:0;">&nbsp;</td>
                                  <td width="${emptyPx}" height="8" style="font-size:0;line-height:0;">&nbsp;</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Tier recommendation -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:20px 40px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" class="card-rec" style="background:#0d0b1a;border-radius:12px;border-left:3px solid ${accent.hex};">
                    <tr>
                      <td style="padding:24px;">
                        <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${accent.hex};">Your Recommendation</p>
                        <h2 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#ffffff;">${content.title}</h2>
                        <p style="margin:0;font-size:15px;color:#9ca3af;line-height:1.6;">${content.tagline}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Diagnosis -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:24px 40px 0;">
                  <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">The Diagnosis</p>
                  <p style="margin:0;font-size:16px;color:#d1d5db;line-height:1.75;">${content.body}</p>
                </td>
              </tr>
            </table>

            <!-- Outcomes -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:24px 40px 0;">
                  <p style="margin:0 0 18px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">What this means for you</p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${outcomesHtml}
                  </table>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:28px 40px 0;"><div class="divider" style="height:1px;background:#1f1b35;"></div></td></tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:32px 40px 40px;text-align:center;">
                  <p style="margin:0 0 6px;font-size:20px;font-weight:800;color:#ffffff;line-height:1.3;">See exactly what we'd build for you.</p>
                  <p style="margin:0 0 28px;font-size:14px;color:#9ca3af;line-height:1.6;">One free 30-minute call. No pitch — just a clear, specific plan<br>mapped to your operation.</p>
                  <a href="${CALENDLY_URL}" style="display:inline-block;background:${accent.hex};color:#ffffff;font-size:16px;font-weight:700;padding:16px 40px;border-radius:10px;text-decoration:none;letter-spacing:0.01em;">Book Your Free Strategy Call &rarr;</a>
                  <p style="margin:16px 0 0;font-size:12px;color:#4b5563;">Free &middot; No obligation &middot; 30 minutes</p>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 0;text-align:center;">
            <p style="margin:0;font-size:12px;color:#374151;">Growbly &middot; AI Automation Agency &middot; growbly.digital</p>
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
      html: buildLeadEmail(recommendedTier, lead.email, scores as unknown as Record<string, number>),
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
