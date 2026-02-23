import { z } from "zod";

const envSchema = z.object({
  CONVERTKIT_API_KEY: z.string().optional(),
  CONVERTKIT_FORM_ID: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://www.runaid.app"),
  CONTACT_EMAIL: z.string().default("hello@runaid.app"),
});

export function getEnv() {
  return envSchema.parse(process.env);
}
