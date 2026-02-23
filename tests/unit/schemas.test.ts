import { describe, expect, it } from "vitest";
import { waitlistSchema } from "@/lib/schemas";

describe("waitlistSchema", () => {
  it("accepts valid payload", () => {
    const result = waitlistSchema.safeParse({
      email: "runner@example.com",
      consent: true,
      source: "hero",
      website: "",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = waitlistSchema.safeParse({
      email: "bad-email",
      consent: true,
      source: "hero",
      website: "",
    });

    expect(result.success).toBe(false);
  });

  it("rejects missing consent", () => {
    const result = waitlistSchema.safeParse({
      email: "runner@example.com",
      consent: false,
      source: "hero",
      website: "",
    });

    expect(result.success).toBe(false);
  });
});
