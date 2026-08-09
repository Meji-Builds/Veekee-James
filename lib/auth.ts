import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "vj_dashboard_session";
const SESSION_PAYLOAD = "veekee-james-dashboard";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

function sign(secret: string): string {
  return createHmac("sha256", secret).update(SESSION_PAYLOAD).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function isDashboardConfigured(): boolean {
  return Boolean(process.env.DASHBOARD_PASSWORD);
}

export function checkPassword(candidate: string): boolean {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) return false;
  return safeEqual(candidate, password);
}

export async function createSession(): Promise<void> {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) throw new Error("DASHBOARD_PASSWORD is not configured.");

  const store = await cookies();
  store.set(COOKIE_NAME, sign(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) return false;

  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  if (!value) return false;

  return safeEqual(value, sign(password));
}
