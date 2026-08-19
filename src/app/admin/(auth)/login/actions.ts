"use server";

import { timingSafeEqual } from "crypto";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { createSession } from "@/lib/auth";

export type LoginState = { error?: string } | undefined;

const attempts = new Map<string, { count: number; blockedUntil: number }>();
const MAX_ATTEMPTS = 5;
const BLOCK_MS = 30_000;

function safeCompare(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // still run a comparison of equal length to avoid a length-based timing signal
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "local";

  const entry = attempts.get(ip);
  const now = Date.now();
  if (entry && entry.blockedUntil > now) {
    return { error: "Too many attempts. Try again in a moment." };
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return { error: "Admin panel is not configured yet (ADMIN_PASSWORD missing)." };
  }

  const isValid = password.length > 0 && safeCompare(password, adminPassword);

  if (!isValid) {
    const count = (entry?.count ?? 0) + 1;
    attempts.set(ip, {
      count,
      blockedUntil: count >= MAX_ATTEMPTS ? now + BLOCK_MS : 0,
    });
    return { error: "Incorrect password." };
  }

  attempts.delete(ip);
  await createSession();
  redirect("/admin");
}
