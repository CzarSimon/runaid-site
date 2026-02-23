import { getEnv } from "@/lib/env";

type ConvertKitSubscribeInput = {
  email: string;
};

type ConvertKitResult = {
  ok: boolean;
  status: number;
};

export async function subscribeToConvertKit(input: ConvertKitSubscribeInput): Promise<ConvertKitResult> {
  const env = getEnv();

  if (!env.CONVERTKIT_API_KEY || !env.CONVERTKIT_FORM_ID) {
    return { ok: true, status: 200 };
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": env.CONVERTKIT_API_KEY,
  };

  const upsertSubscriber = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email_address: input.email,
    }),
    cache: "no-store",
  });

  if (!upsertSubscriber.ok) {
    return { ok: false, status: upsertSubscriber.status };
  }

  const addToForm = await fetch(`https://api.kit.com/v4/forms/${env.CONVERTKIT_FORM_ID}/subscribers`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email_address: input.email,
    }),
    cache: "no-store",
  });

  return { ok: addToForm.ok, status: addToForm.status };
}
