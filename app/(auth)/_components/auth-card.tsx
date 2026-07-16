import { ArrowLeft, Check, Flame, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { TransitionLink } from "@/components/site/transition-link";

type AuthCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  error?: string;
  alternateHref: string;
  alternateText: string;
  alternateAction: string;
  children: React.ReactNode;
};

export function AuthCard({
  title,
  description,
  icon: Icon,
  error,
  alternateHref,
  alternateText,
  alternateAction,
  children,
}: AuthCardProps) {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#07100f] bg-cover bg-center px-5 py-8 text-white sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/home-backeground.webp')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,10,0.96)_0%,rgba(3,9,10,0.84)_44%,rgba(3,9,10,0.64)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.2),transparent_30%),radial-gradient(circle_at_82%_78%,rgba(251,191,36,0.18),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-[#07100f]">
              <Flame className="size-5" />
            </span>
            <span className="truncate text-base font-semibold sm:text-lg">
              PetroVision Energy
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Home
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.95fr_0.78fr] lg:py-16">
          <div className="hidden max-w-2xl animate-home-fade-up lg:block">
            <p className="inline-flex rounded-lg border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-sm font-semibold text-teal-100">
              Secure energy workspace
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight">
              Sign in to keep production, reservoir, and market work connected.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Use one protected workspace to manage forecasts, well planning,
              scenario reports, and operational dashboards across your assets.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Protected demo workspace",
                "Forecast and reservoir scenario history",
                "Responsive dashboards for field teams",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4"
                >
                  <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-300 text-[#07100f]">
                    <Check className="size-4" />
                  </span>
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md animate-home-fade-up rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg bg-amber-400 text-[#07100f]">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-teal-100">
                  PetroVision workspace
                </p>
                <p className="text-xs text-slate-300">Secure access</p>
              </div>
            </div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {description}
            </p>
            {error ? (
              <p className="mt-4 rounded-lg border border-red-300/20 bg-red-400/10 p-3 text-sm text-red-100">
                Check your inputs and try again.
              </p>
            ) : null}
            <div className="mt-6">{children}</div>
            <p className="mt-6 text-sm text-slate-300">
              {alternateText}{" "}
              <TransitionLink
                href={alternateHref}
                className="font-semibold text-amber-300 hover:text-amber-200"
              >
                {alternateAction}
              </TransitionLink>
            </p>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 PetroVision Energy.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
