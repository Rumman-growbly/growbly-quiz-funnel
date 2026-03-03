import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";
import type { QuizSubmission } from "@/types/quiz";

export async function POST(req: NextRequest) {
  let body: QuizSubmission;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { answers, lead, scores, recommendedTier } = body;

  // Basic validation
  if (!lead?.email || !recommendedTier) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // 1. Insert into Supabase (best-effort — don't block user on failure)
  try {
    const supabase = createClient();
    await supabase.from("leads").insert({
      email:               lead.email,
      role:                answers.role,
      monthly_revenue:     answers.revenue,
      pain_point:          answers.pain,
      people_affected:     answers.scale,
      previous_attempts:   answers.attempts,
      timeline:            answers.timeline,
      ai_familiarity:      answers.aiFamiliarity,
      investment_readiness: answers.investment,
      starter_score:       scores.starter,
      growth_score:        scores.growth,
      enterprise_score:    scores.enterprise,
      recommended_tier:    recommendedTier,
      quiz_answers:        answers,
      submitted_at:        new Date().toISOString(),
    });
  } catch (err) {
    console.error("[submit-quiz] Supabase insert failed:", err);
    // Continue — don't block user experience
  }

  // 2. Fire n8n webhook (fire-and-forget)
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:            lead.email,
        recommended_tier: recommendedTier,
        scores,
        answers,
      }),
    }).catch((err) => console.error("[submit-quiz] n8n webhook failed:", err));
  }

  return NextResponse.json({ success: true, tier: recommendedTier }, { status: 200 });
}
