type WindowEntry = {
  count: number;
  startedAt: number;
};

const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQUESTS = 8;
const buckets = new Map<string, WindowEntry>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now - existing.startedAt > WINDOW_MS) {
    buckets.set(key, { count: 1, startedAt: now });
    return false;
  }

  existing.count += 1;
  buckets.set(key, existing);

  return existing.count > MAX_REQUESTS;
}

export function clearRateLimitStore() {
  buckets.clear();
}
