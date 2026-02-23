export type WaitlistRequest = {
  email: string;
  consent: boolean;
  source?: "hero" | "footer" | "unknown";
  website?: string;
};

export type WaitlistResponse = {
  ok: boolean;
  message: string;
};
