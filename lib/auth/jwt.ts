import "server-only";

import { createHmac, timingSafeEqual } from "crypto";

import type { UserSession } from "@/lib/types/domain";

const encoder = new TextEncoder();

function base64UrlEncode(value: string) {
  return Buffer.from(value)
    .toString("base64url")
    .replaceAll("=", "");
}

function base64UrlJson(value: unknown) {
  return base64UrlEncode(JSON.stringify(value));
}

function sign(value: string) {
  const secret = process.env.JWT_SECRET ?? "development-only-secret";
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function createSessionToken(session: UserSession) {
  const header = base64UrlJson({ alg: "HS256", typ: "JWT" });
  const payload = base64UrlJson({
    ...session,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
  });
  const unsigned = `${header}.${payload}`;

  return `${unsigned}.${sign(unsigned)}`;
}

export function verifySessionToken(token?: string): UserSession | null {
  if (!token) {
    return null;
  }

  const [header, payload, signature] = token.split(".");

  if (!header || !payload || !signature) {
    return null;
  }

  const expectedSignature = sign(`${header}.${payload}`);
  const signatureBytes = encoder.encode(signature);
  const expectedBytes = encoder.encode(expectedSignature);

  if (
    signatureBytes.byteLength !== expectedBytes.byteLength ||
    !timingSafeEqual(signatureBytes, expectedBytes)
  ) {
    return null;
  }

  const decoded = JSON.parse(Buffer.from(payload, "base64url").toString());

  if (typeof decoded.exp !== "number" || decoded.exp < Date.now() / 1000) {
    return null;
  }

  return {
    userId: String(decoded.userId),
    name: String(decoded.name),
    email: String(decoded.email),
  };
}
