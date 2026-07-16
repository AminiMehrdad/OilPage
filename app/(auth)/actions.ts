"use server";

import { redirect } from "next/navigation";

import { createSession, clearSession } from "@/lib/auth/session";
import { authSchema } from "@/lib/validation/auth";

export async function loginAction(formData: FormData) {
  const parsed = authSchema.omit({ name: true }).safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    redirect("/login?error=invalid");
  }

  await createSession({
    userId: "demo-user",
    name: "Production Engineer",
    email: parsed.data.email,
  });

  redirect("/dashboard");
}

export async function registerAction(formData: FormData) {
  const parsed = authSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    redirect("/register?error=invalid");
  }

  await createSession({
    userId: "demo-user",
    name: parsed.data.name ?? "Production Engineer",
    email: parsed.data.email,
  });

  redirect("/dashboard");
}

export async function logoutAction() {
  await clearSession();
  redirect("/");
}
