/* ═══════════════════════════════════════════════
   NEWSLETTER API — Subscribe + Lead Source Capture
   ═══════════════════════════════════════════════ */

import { NextResponse } from "next/server";

interface Subscription {
  email: string;
  subscribedAt: string;
  source: string;
  referrer: string | null;
  page: string;
}

// In-memory store (use Supabase/Database in production)
const subscriptions: Subscription[] = [];

export async function POST(request: Request) {
  try {
    const { email, source, referrer, page } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store subscription with lead source data
    subscriptions.push({
      email: email.toLowerCase().trim(),
      subscribedAt: new Date().toISOString(),
      source: source || "direct",
      referrer: referrer || null,
      page: page || "/blog",
    });

    console.log(
      `📧 Newsletter signup: ${email} (source: ${source || "direct"}, page: ${page || "/blog"})`
    );

    return NextResponse.json(
      { 
        message: "Successfully subscribed", 
        email,
        subscriberCount: subscriptions.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return subscriber count (no email exposure)
  return NextResponse.json(
    { subscriberCount: subscriptions.length },
    { status: 200 }
  );
}
