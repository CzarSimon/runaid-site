function redact(value: string): string {
  return value.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]");
}

export function logInfo(message: string, context?: Record<string, unknown>) {
  const details = context ? JSON.stringify(context) : "";
  console.log(JSON.stringify({ level: "info", message, details: redact(details) }));
}

export function logError(message: string, context?: Record<string, unknown>) {
  const details = context ? JSON.stringify(context) : "";
  console.error(JSON.stringify({ level: "error", message, details: redact(details) }));
}
