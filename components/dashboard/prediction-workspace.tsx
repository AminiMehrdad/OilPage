"use client";

import { useMemo, useState } from "react";

import { ForecastChart } from "@/components/charts/forecast-chart";
import { forecastExponentialDecline } from "@/lib/formulas/decline";
import { cumulativeOil } from "@/lib/formulas/production";

export function PredictionWorkspace() {
  const [initialRate, setInitialRate] = useState(1800);
  const [decline, setDecline] = useState(18);
  const [months, setMonths] = useState(24);

  const forecast = useMemo(
    () =>
      forecastExponentialDecline({
        initialRate,
        annualDeclinePercent: decline,
        months,
      }),
    [decline, initialRate, months],
  );

  const cumulative = cumulativeOil(forecast);

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <form className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="font-semibold text-slate-950">Forecast Inputs</h2>
        <div className="mt-5 space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Initial oil rate STB/d
            <input
              type="number"
              value={initialRate}
              onChange={(event) => setInitialRate(Number(event.target.value))}
              className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Annual decline %
            <input
              type="number"
              value={decline}
              onChange={(event) => setDecline(Number(event.target.value))}
              className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Forecast months
            <input
              type="number"
              min={1}
              max={120}
              value={months}
              onChange={(event) => setMonths(Number(event.target.value))}
              className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
        </div>
        <div className="mt-6 rounded-lg bg-slate-950 p-4 text-white">
          <p className="text-sm text-slate-300">Forecast cumulative oil</p>
          <p className="mt-2 text-2xl font-semibold">
            {cumulative.toLocaleString()} STB
          </p>
        </div>
      </form>
      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="font-semibold text-slate-950">
          Exponential Decline Forecast
        </h2>
        <ForecastChart data={forecast} />
      </div>
    </div>
  );
}
