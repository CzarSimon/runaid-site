import { NextResponse } from "next/server";
import { handleWaitlistSubmission } from "@/lib/waitlist-handler";

function keyFromRequest(request: Request): string {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown-ip";
  const ua = request.headers.get("user-agent") ?? "unknown-ua";
  return `${ip}|${ua}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await handleWaitlistSubmission(body, keyFromRequest(request));
    return NextResponse.json(result.body, { status: result.status });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected error. Please try again.",
      },
      { status: 500 },
    );
  }
}
