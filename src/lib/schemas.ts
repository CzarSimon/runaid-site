import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email("Please provide a valid email address."),
  consent: z.literal(true, { message: "You must consent before joining the waitlist." }),
  source: z.enum(["hero", "footer", "unknown"]).default("unknown"),
  website: z.string().optional().default(""),
});

export type WaitlistPayload = z.infer<typeof waitlistSchema>;
