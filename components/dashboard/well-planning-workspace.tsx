"use client";

import { useMemo, useState } from "react";

import { requiredWellCount } from "@/lib/formulas/wells";

export function WellPlanningWorkspace() {
  const [targetRate, setTargetRate] = useState(25000);
  const [averageWellRate, setAverageWellRate] = useState(950);
  const [uptimePercent, setUptimePercent] = useState(92);

  const wells = useMemo(
    () => requiredWellCount({ targetRate, averageWellRate, uptimePercent }),
    [averageWellRate, targetRate, uptimePercent],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <form className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="font-semibold text-slate-950">Well Inputs</h2>
        <div className="mt-5 space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Target field rate STB/d
            <input
              type="number"
              value={targetRate}
              onChange={(event) => setTargetRate(Number(event.target.value))}
              className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Average well rate STB/d
            <input
              type="number"
              value={averageWellRate}
              onChange={(event) =>
                setAverageWellRate(Number(event.target.value))
              }
              className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Uptime %
            <input
              type="number"
              value={uptimePercent}
              onChange={(event) => setUptimePercent(Number(event.target.value))}
              className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3"
            />
          </label>
        </div>
      </form>
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">Required producing wells</p>
        <p className="mt-4 text-6xl font-semibold text-slate-950">{wells}</p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
          Formula: target field rate divided by average well rate adjusted by
          uptime. The result is rounded up because partial wells are not usable
          for field planning.
        </p>
      </div>
    </div>
  );
}
