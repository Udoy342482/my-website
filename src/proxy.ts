import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { decryptSession } from "@/lib/auth";

const COOKIE_NAME = "admin_session";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path === "/admin/login") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  const session = await decryptSession(cookie);

  if (!session?.authenticated) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
