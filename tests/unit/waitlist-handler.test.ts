import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearRateLimitStore } from "@/lib/rate-limit";
import { handleWaitlistSubmission } from "@/lib/waitlist-handler";

vi.mock("@/lib/convertkit", () => ({
  subscribeToConvertKit: vi.fn(),
}));

const { subscribeToConvertKit } = await import("@/lib/convertkit");

beforeEach(() => {
  clearRateLimitStore();
  vi.mocked(subscribeToConvertKit).mockReset();
});

describe("handleWaitlistSubmission", () => {
  it("returns success for valid submission", async () => {
    vi.mocked(subscribeToConvertKit).mockResolvedValue({ ok: true, status: 200 });

    const result = await handleWaitlistSubmission(
      {
        email: "runner@example.com",
        consent: true,
        source: "hero",
        website: "",
      },
      "key-1",
    );

    expect(result.status).toBe(200);
    expect(result.body.ok).toBe(true);
  });

  it("returns 400 on invalid payload", async () => {
    const result = await handleWaitlistSubmission({ email: "nope", consent: false }, "key-2");
    expect(result.status).toBe(400);
    expect(result.body.ok).toBe(false);
  });

  it("returns 502 when provider call fails", async () => {
    vi.mocked(subscribeToConvertKit).mockResolvedValue({ ok: false, status: 500 });

    const result = await handleWaitlistSubmission(
      {
        email: "runner@example.com",
        consent: true,
        source: "hero",
        website: "",
      },
      "key-3",
    );

    expect(result.status).toBe(502);
    expect(result.body.ok).toBe(false);
  });
});
