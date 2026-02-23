import { waitlistSchema } from "@/lib/schemas";
import { isRateLimited } from "@/lib/rate-limit";
import { subscribeToConvertKit } from "@/lib/convertkit";
import { logError, logInfo } from "@/lib/logger";
import type { WaitlistResponse } from "@/types/waitlist";

export async function handleWaitlistSubmission(input: unknown, rateKey: string) {
  if (isRateLimited(rateKey)) {
    const limited: WaitlistResponse = {
      ok: false,
      message: "Too many attempts. Please try again shortly.",
    };

    return { status: 429, body: limited };
  }

  const parsed = waitlistSchema.safeParse(input);

  if (!parsed.success) {
    const invalid: WaitlistResponse = {
      ok: false,
      message: parsed.error.issues[0]?.message ?? "Invalid submission.",
    };

    return { status: 400, body: invalid };
  }

  if (parsed.data.website.trim().length > 0) {
    const honeypot: WaitlistResponse = {
      ok: true,
      message: "You are on the waitlist.",
    };

    return { status: 200, body: honeypot };
  }

  const result = await subscribeToConvertKit({ email: parsed.data.email });

  if (!result.ok) {
    logError("waitlist_convertkit_error", {
      status: result.status,
      source: parsed.data.source,
    });

    const failed: WaitlistResponse = {
      ok: false,
      message: "Unable to submit right now. Please try again.",
    };

    return { status: 502, body: failed };
  }

  logInfo("waitlist_subscribed", { source: parsed.data.source });

  const success: WaitlistResponse = {
    ok: true,
    message: "You are on the waitlist. We will share updates soon.",
  };

  return { status: 200, body: success };
}
