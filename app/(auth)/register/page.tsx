import { Gauge } from "lucide-react";

import { registerAction } from "@/app/(auth)/actions";
import { AuthCard } from "@/app/(auth)/_components/auth-card";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <AuthCard
      title="Register"
      description="Create a workspace for production forecasting, well planning, and reservoir calculations."
      icon={Gauge}
      error={params.error}
      alternateHref="/login"
      alternateText="Already registered?"
      alternateAction="Login"
    >
      <form action={registerAction} className="space-y-4">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            required
            className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#07100f]/70 px-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300 focus:bg-[#07100f]/90"
            placeholder="Production Engineer"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#07100f]/70 px-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300 focus:bg-[#07100f]/90"
            placeholder="engineer@company.com"
          />
        </label>
        <label className="block text-sm font-medium">
          Password
          <input
            name="password"
            type="password"
            required
            minLength={8}
            className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#07100f]/70 px-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300 focus:bg-[#07100f]/90"
            placeholder="Minimum 8 characters"
          />
        </label>
        <button className="h-12 w-full rounded-lg bg-amber-400 px-4 text-sm font-semibold text-[#07100f] shadow-lg shadow-amber-950/30 transition hover:bg-amber-300">
          Register
        </button>
      </form>
    </AuthCard>
  );
}
