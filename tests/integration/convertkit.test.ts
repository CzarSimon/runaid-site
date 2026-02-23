import { afterEach, describe, expect, it, vi } from "vitest";
import { subscribeToConvertKit } from "@/lib/convertkit";

const originalEnv = process.env;

describe("subscribeToConvertKit", () => {
  afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it("returns success without provider credentials", async () => {
    delete process.env.CONVERTKIT_API_KEY;
    delete process.env.CONVERTKIT_FORM_ID;

    const result = await subscribeToConvertKit({ email: "runner@example.com" });
    expect(result.ok).toBe(true);
  });

  it("handles provider success", async () => {
    process.env.CONVERTKIT_API_KEY = "test";
    process.env.CONVERTKIT_FORM_ID = "123";

    const fetchSpy = vi.spyOn(globalThis, "fetch");
    fetchSpy
      .mockResolvedValueOnce({ ok: true, status: 201 } as Response)
      .mockResolvedValueOnce({ ok: true, status: 201 } as Response);

    const result = await subscribeToConvertKit({ email: "runner@example.com" });
    expect(result.ok).toBe(true);
    expect(result.status).toBe(201);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it("handles provider failure when subscriber upsert fails", async () => {
    process.env.CONVERTKIT_API_KEY = "test";
    process.env.CONVERTKIT_FORM_ID = "123";

    const fetchSpy = vi.spyOn(globalThis, "fetch");
    fetchSpy.mockResolvedValueOnce({ ok: false, status: 401 } as Response);

    const result = await subscribeToConvertKit({ email: "runner@example.com" });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(401);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("handles provider failure when form subscribe fails", async () => {
    process.env.CONVERTKIT_API_KEY = "test";
    process.env.CONVERTKIT_FORM_ID = "123";

    const fetchSpy = vi.spyOn(globalThis, "fetch");
    fetchSpy
      .mockResolvedValueOnce({ ok: true, status: 201 } as Response)
      .mockResolvedValueOnce({ ok: false, status: 403 } as Response);

    const result = await subscribeToConvertKit({ email: "runner@example.com" });
    expect(result.ok).toBe(false);
    expect(result.status).toBe(403);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });
});
