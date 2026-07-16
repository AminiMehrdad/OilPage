import { BarChart3, Calculator, Database, LineChart } from "lucide-react";

import { ForecastChart } from "@/components/charts/forecast-chart";
import { MetricCard } from "@/components/dashboard/metric-card";
import { SectionHeader } from "@/components/dashboard/section-header";
import { forecastExponentialDecline } from "@/lib/formulas/decline";
import { cumulativeOil, waterCutPercent } from "@/lib/formulas/production";

export default function DashboardPage() {
  const forecast = forecastExponentialDecline({
    initialRate: 1800,
    annualDeclinePercent: 18,
    months: 18,
  });

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Production Dashboard"
        description="A working shell for production performance, forecasts, well count estimates, and reservoir calculations."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Current oil rate"
          value="18,420 STB/d"
          detail="Across active producing wells"
          icon={BarChart3}
        />
        <MetricCard
          label="Forecast cumulative"
          value={`${Math.round(cumulativeOil(forecast)).toLocaleString()} STB`}
          detail="Demo exponential decline case"
          icon={LineChart}
        />
        <MetricCard
          label="Water cut"
          value={`${waterCutPercent(18420, 4200)}%`}
          detail="Oil and water daily rate basis"
          icon={Database}
        />
        <MetricCard
          label="Required wells"
          value="29"
          detail="Target rate adjusted for uptime"
          icon={Calculator}
        />
      </div>
      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="font-semibold text-slate-950">Base Forecast</h2>
        <ForecastChart data={forecast} />
      </section>
    </div>
  );
}
