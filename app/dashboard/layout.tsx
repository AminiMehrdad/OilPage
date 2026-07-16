import {
  BarChart3,
  Calculator,
  FileText,
  Gauge,
  LineChart,
  Settings,
  Table2,
  Waves,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { logoutAction } from "@/app/(auth)/actions";
import { getSession } from "@/lib/auth/session";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: Gauge },
  { href: "/dashboard/production", label: "Production", icon: BarChart3 },
  { href: "/dashboard/prediction", label: "Prediction", icon: LineChart },
  { href: "/dashboard/wells", label: "Wells", icon: Calculator },
  { href: "/dashboard/reservoir", label: "Reservoir", icon: Waves },
  { href: "/dashboard/scenarios", label: "Scenarios", icon: Table2 },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white p-4 lg:block">
        <Link href="/dashboard" className="flex items-center gap-3 px-2 py-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-cyan-500 text-white">
            <Gauge className="size-5" />
          </span>
          <span className="font-semibold">PetroForecast</span>
        </Link>
        <nav className="mt-6 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Signed in as</p>
              <p className="font-semibold">{session.name}</p>
            </div>
            <form action={logoutAction}>
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100">
                Logout
              </button>
            </form>
          </div>
          <nav className="mt-4 flex gap-2 overflow-x-auto lg:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
