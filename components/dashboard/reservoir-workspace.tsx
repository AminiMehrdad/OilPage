"use client";

import { useState } from "react";

import {
  estimatedUltimateRecovery,
  stockTankOilInitiallyInPlace,
} from "@/lib/formulas/reservoir";

export function ReservoirWorkspace() {
  const [areaAcres, setAreaAcres] = useState(3200);
  const [netPayFeet, setNetPayFeet] = useState(70);
  const [porosityPercent, setPorosityPercent] = useState(18);
  const [oilSaturationPercent, setOilSaturationPercent] = useState(68);
  const [formationVolumeFactor, setFormationVolumeFactor] = useState(1.28);
  const [recoveryFactorPercent, setRecoveryFactorPercent] = useState(32);

  const input = {
    areaAcres,
    netPayFeet,
    porosityPercent,
    oilSaturationPercent,
    formationVolumeFactor,
    recoveryFactorPercent,
  };

  const stoiip = stockTankOilInitiallyInPlace(input);
  const eur = estimatedUltimateRecovery(input);

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <form className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="font-semibold text-slate-950">Reservoir Inputs</h2>
        <div className="mt-5 space-y-4">
          {[
            ["Area acres", areaAcres, setAreaAcres],
            ["Net pay ft", netPayFeet, setNetPayFeet],
            ["Porosity %", porosityPercent, setPorosityPercent],
            ["Oil saturation %", oilSaturationPercent, setOilSaturationPercent],
            ["Formation volume factor", formationVolumeFactor, setFormationVolumeFactor],
            ["Recovery factor %", recoveryFactorPercent, setRecoveryFactorPercent],
          ].map(([label, value, setValue]) => (
            <label
              key={String(label)}
              className="block text-sm font-medium text-slate-700"
            >
              {String(label)}
              <input
                type="number"
                value={Number(value)}
                onChange={(event) =>
                  (setValue as (value: number) => void)(
                    Number(event.target.value),
                  )
                }
                className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3"
              />
            </label>
          ))}
        </div>
      </form>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">STOIIP</p>
          <p className="mt-4 text-3xl font-semibold text-slate-950">
            {Math.round(stoiip).toLocaleString()} STB
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Estimated ultimate recovery</p>
          <p className="mt-4 text-3xl font-semibold text-slate-950">
            {Math.round(eur).toLocaleString()} STB
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 md:col-span-2">
          <p className="text-sm leading-6 text-slate-600">
            Formula: 7758 x area x net pay x porosity x oil saturation divided
            by formation volume factor. EUR applies the selected recovery
            factor to the volumetric estimate.
          </p>
        </div>
      </div>
    </div>
  );
}
