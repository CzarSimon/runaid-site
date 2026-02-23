"use client";

import { FormEvent, useState } from "react";
import { track } from "@vercel/analytics";
import type { WaitlistResponse } from "@/types/waitlist";

type FormState = {
  email: string;
  consent: boolean;
  website: string;
};

const initialState: FormState = {
  email: "",
  consent: false,
  website: "",
};

export function WaitlistForm({ source = "hero" }: { source?: "hero" | "footer" | "unknown" }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<WaitlistResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const response = await fetch("/api/waitlist/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        consent: form.consent,
        source,
        website: form.website,
      }),
    });

    const payload = (await response.json()) as WaitlistResponse;
    setStatus(payload);
    setSubmitting(false);

    track("waitlist_submitted", {
      source,
      ok: payload.ok,
    });

    if (payload.ok) {
      setForm(initialState);
    }
  }

  return (
    <form className="waitlist-form" onSubmit={onSubmit} noValidate>
      <label htmlFor={`email-${source}`} className="input-label">
        Email
      </label>
      <input
        id={`email-${source}`}
        type="email"
        required
        autoComplete="email"
        value={form.email}
        onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
        placeholder="you@example.com"
      />

      <label htmlFor={`website-${source}`} className="honey-label">
        Website (leave this empty)
      </label>
      <input
        id={`website-${source}`}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="honey-input"
        value={form.website}
        onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
      />

      <label className="consent-row">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
        />
        <span>I agree to receive launch updates from Runaid.</span>
      </label>

      <button disabled={submitting} type="submit">
        {submitting ? "Submitting..." : "Join the waitlist"}
      </button>

      {status ? (
        <p aria-live="polite" className={status.ok ? "status-ok" : "status-error"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
