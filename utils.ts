export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((email || "").trim());
}

export function buildMailto(subject: string, lines: string[]): string {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent((lines || []).join("\n"));
  return `mailto:info@acufin.be?subject=${s}&body=${b}`;
}

export function isHttpsUrl(url: string): boolean {
  try { return new URL(url).protocol === "https:"; } catch { return false; }
}
