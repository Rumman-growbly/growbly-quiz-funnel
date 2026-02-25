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

  const { answers, lead, profile, isHighPriority } = body;

  // Basic validation
  if (!lead?.email || !lead?.firstName || !profile) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // 1. Insert into Supabase (best-effort — don't block user on failure)
  try {
    const supabase = createClient();
    await supabase.from("leads").insert({
      first_name: lead.firstName,
      email: lead.email,
      profile,
      revenue_range: answers.revenue,
      business_type: answers.businessType,
      pain_point: answers.painPoint,
      quiz_answers: answers,
      is_high_priority: isHighPriority,
      calendly_booked: false,
    });
  } catch (err) {
    console.error("[submit-quiz] Supabase insert failed:", err);
    // Continue — don't block the user experience
  }

  // 2. Fire n8n webhook (fire-and-forget)
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: lead.firstName,
        email: lead.email,
        profile,
        revenue_range: answers.revenue,
        business_type: answers.businessType,
        pain_point: answers.painPoint,
        tools: answers.tools,
        is_high_priority: isHighPriority,
        quiz_answers: answers,
      }),
    }).catch((err) => console.error("[submit-quiz] n8n webhook failed:", err));
  }

  return NextResponse.json({ success: true, profile }, { status: 200 });
}
