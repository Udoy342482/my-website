import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";

import { decryptSession, getSessionCookieValue } from "@/lib/auth";

export const verifySession = cache(async () => {
  const cookieValue = await getSessionCookieValue();
  const session = await decryptSession(cookieValue);
  return session?.authenticated ? { isAuth: true as const } : null;
});

export async function requireSession() {
  const session = await verifySession();
  if (!session) {
    redirect("/admin/login");
  }
  return session;
}
