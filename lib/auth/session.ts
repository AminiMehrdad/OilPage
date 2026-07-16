import "server-only";

import { cookies } from "next/headers";

import { createSessionToken, verifySessionToken } from "@/lib/auth/jwt";
import type { UserSession } from "@/lib/types/domain";

const SESSION_COOKIE = "oilgas_session";

export async function createSession(session: UserSession) {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, createSessionToken(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
