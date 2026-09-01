import crypto from "node:crypto";

const COOKIE_NAME = "chs_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function secret() {
  // Falls back to a dev-only value so local testing works out of the box —
  // set ADMIN_SESSION_SECRET (any long random string) before deploying.
  return process.env.ADMIN_SESSION_SECRET || "dev-only-insecure-secret-change-me";
}

export function signSession(): string {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `${expires}`;
  const sig = crypto.createHmac("sha256", secret()).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function verifySession(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = crypto.createHmac("sha256", secret()).update(payload).digest("hex");
  const valid = crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  if (!valid) return false;
  return Number(payload) > Date.now();
}

export const ADMIN_COOKIE = COOKIE_NAME;
export const ADMIN_COOKIE_MAX_AGE = MAX_AGE_SECONDS;
