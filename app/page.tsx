import {
  ArrowRight,
  BarChart3,
  Check,
  Flame,
  Gauge,
  Leaf,
  LineChart,
  Route,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { TransitionLink } from "@/components/site/transition-link";

const services = [
  {
    icon: Search,
    title: "Exploration Intelligence",
    text: "Compare geology, risk, and commercial signals across target basins.",
  },
  {
    icon: Gauge,
    title: "Production Monitoring",
    text: "Track production, well health, and regional output trends.",
  },
  {
    icon: Route,
    title: "Pipeline Management",
    text: "Prioritize maintenance and throughput across critical routes.",
  },
  {
    icon: LineChart,
    title: "Energy Trading",
    text: "Monitor prices, watchlists, and supply-demand movement.",
  },
  {
    icon: Wrench,
    title: "Asset Maintenance",
    text: "Coordinate inspections, utilization, and reliability actions.",
  },
  {
    icon: Leaf,
    title: "Sustainability Analytics",
    text: "Measure emissions, renewable integration, and ESG progress.",
  },
];

const markets = [
  ["Brent Crude", "$86.42", "+1.8% rising"],
  ["WTI Crude", "$82.15", "+1.2% rising"],
  ["Natural Gas", "$3.18", "-0.6% easing"],
];

const stats = [
  ["128", "Active Projects"],
  ["42", "Countries Covered"],
  ["850", "Daily Market Updates"],
  ["18.4K", "Industry Professionals"],
];

const navLinks = [
  ["#about", "About"],
  ["#services", "Services"],
  ["#market", "Market Insights"],
  ["#sustainability", "Sustainability"],
];

const footerLinks = {
  Platform: [
    ["#services", "Services"],
    ["#market", "Market Insights"],
    ["/dashboard", "Dashboard"],
  ],
  Company: [
    ["#about", "About"],
    ["#sustainability", "Sustainability"],
    ["/register", "Get Started"],
  ],
  Account: [
    ["/login", "Login"],
    ["/register", "Register"],
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07100f] text-white">
      <section
        className="relative flex min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/home-backeground.webp')" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,9,10,0.96)_0%,rgba(3,9,10,0.78)_41%,rgba(3,9,10,0.42)_70%,rgba(3,9,10,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.22),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(245,158,11,0.2),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07100f] to-transparent" />

        <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#07100f]/70 backdrop-blur-xl">
          <nav
            className="flex min-h-20 w-full flex-col justify-center gap-3 px-4 py-3 sm:px-6 lg:px-10"
            aria-label="Primary navigation"
          >
            <div className="flex w-full items-center justify-between gap-4">
              <Link href="/" className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-[#07100f] shadow-lg shadow-amber-950/30">
                  <Flame className="size-5" />
                </span>
                <span className="truncate text-base font-semibold sm:text-lg">
                  PetroVision Energy
                </span>
              </Link>
              <div className="hidden items-center gap-8 text-sm font-medium text-white/75 lg:flex">
                {navLinks.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="home-nav-link hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <TransitionLink
                  href="/login"
                  className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 sm:inline-flex"
                >
                  Login
                </TransitionLink>
                <TransitionLink
                  href="/register"
                  className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-[#07100f] shadow-lg shadow-amber-950/30 hover:bg-amber-300"
                >
                  Get Started
                </TransitionLink>
              </div>
            </div>
            <div className="flex w-full gap-2 overflow-x-auto pb-1 text-sm text-white/75 lg:hidden">
              {navLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl content-center gap-10 px-5 pb-12 pt-36 sm:pt-32 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="max-w-3xl animate-home-fade-up">
            <p className="inline-flex rounded-lg border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-sm font-semibold text-teal-100">
              Intelligence for the Global Energy Industry
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
              Powering smarter energy decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A modern digital platform for monitoring energy markets, managing
              operations, and connecting oil and gas professionals worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TransitionLink
                href="/register"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-[#07100f] hover:bg-amber-300"
              >
                Start workspace
                <ArrowRight className="size-4" />
              </TransitionLink>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                Open dashboard
              </Link>
            </div>
          </div>

          <div className="hidden items-center lg:flex">
            <div className="w-full animate-home-float rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl shadow-teal-950/50 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-300">Market indicators</p>
                  <h2 className="text-xl font-semibold">Live energy board</h2>
                </div>
                <BarChart3 className="size-6 text-teal-200" />
              </div>
              <div className="mt-5 space-y-3">
                {markets.map(([label, value, change]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-[#07100f]/55 p-4"
                  >
                    <div>
                      <p className="font-semibold">{label}</p>
                      <p className="mt-1 text-2xl font-semibold">{value}</p>
                    </div>
                    <span
                      className={`rounded-lg px-3 py-1 text-sm font-semibold ${
                        change.startsWith("-")
                          ? "bg-rose-400/15 text-rose-100"
                          : "bg-emerald-400/15 text-emerald-100"
                      }`}
                    >
                      {change}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-teal-300/10 p-4 text-sm text-teal-50">
                Real-time dashboards, scenario planning, and operational
                reports stay connected across every asset team.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="home-section bg-[#07100f] px-5 py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <article
              key={label}
              className="home-reveal rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10"
            >
              <p className="text-4xl font-semibold text-amber-300">{value}</p>
              <h2 className="mt-3 font-semibold text-white">{label}</h2>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="home-section bg-[#0b1715] px-5 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="home-reveal text-sm font-semibold uppercase text-teal-200">
            Services
          </p>
          <div className="home-reveal mt-3 grid gap-5 lg:grid-cols-[0.9fr_1fr]">
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Operational intelligence across the energy value chain
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Unify market insight, field performance, asset reliability, and
              sustainability reporting in one responsive interface.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.title}
                className="home-reveal rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-teal-200/40 hover:bg-white/[0.07]"
              >
                <item.icon className="size-6 text-amber-300" />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="market"
        className="home-section bg-[#07100f] px-5 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="home-reveal text-sm font-semibold uppercase text-teal-200">
            Market Insights
          </p>
          <h2 className="home-reveal mt-3 text-3xl font-semibold md:text-5xl">
            Energy markets at a glance
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {markets.map(([label, value, change]) => (
              <article
                key={label}
                className="home-reveal rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10"
              >
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="mt-4 text-4xl font-semibold">{value}</p>
                <span
                  className={`mt-5 inline-flex rounded-lg px-3 py-1 text-sm font-semibold ${
                    change.startsWith("-")
                      ? "bg-rose-400/15 text-rose-100"
                      : "bg-emerald-400/15 text-emerald-100"
                  }`}
                >
                  {change}
                </span>
                <p className="mt-4 text-sm text-slate-400">
                  Last updated 5 min ago
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sustainability"
        className="home-section bg-[#0d1612] px-5 py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="home-reveal rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10">
            <ShieldCheck className="size-8 text-emerald-200" />
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
              Measure carbon, renewables, and ESG progress
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              PetroVision Energy helps teams monitor carbon-emission intensity,
              renewable integration, and ESG readiness alongside daily
              operations.
            </p>
          </div>
          <ul className="space-y-4 text-slate-200">
            {[
              "Real-time dashboards and KPI cards",
              "Protected demo workspace with reusable components",
              "Market, production, asset, project, and report workflows",
            ].map((item) => (
              <li
                key={item}
                className="home-reveal flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-300 text-[#07100f]">
                  <Check className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07100f] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-amber-400 text-[#07100f]">
                <Flame className="size-5" />
              </span>
              <span className="text-lg font-semibold">PetroVision Energy</span>
            </Link>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Energy intelligence, forecasting, and operational dashboards for
              oil and gas teams working across assets, markets, and reports.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                ["in", "LinkedIn"],
                ["X", "X"],
                ["YT", "YouTube"],
              ].map(([icon, label]) => (
                <a
                  key={label.toString()}
                  href="#"
                  aria-label={label.toString()}
                  className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-semibold text-slate-200 transition hover:border-amber-300/50 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h2 className="text-sm font-semibold uppercase text-teal-200">
                  {group}
                </h2>
                <nav className="mt-4 space-y-3" aria-label={group}>
                  {links.map(([href, label]) => (
                    href === "/login" || href === "/register" ? (
                      <TransitionLink
                        key={label}
                        href={href}
                        className="block text-sm text-slate-300 transition hover:text-white"
                      >
                        {label}
                      </TransitionLink>
                    ) : (
                      <Link
                        key={label}
                        href={href}
                        className="block text-sm text-slate-300 transition hover:text-white"
                      >
                        {label}
                      </Link>
                    )
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 PetroVision Energy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
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
        </div>
      </footer>
    </main>
  );
}
