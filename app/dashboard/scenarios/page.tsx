import Link from "next/link";

import { SectionHeader } from "@/components/dashboard/section-header";

const scenarios = [
  ["base-case", "Base decline", "18% decline", "42.8 MMSTB"],
  ["infill-case", "Infill drilling", "29 wells", "55.4 MMSTB"],
  ["facility-limit", "Facility limit", "22,000 STB/d cap", "39.1 MMSTB"],
];

export default function ScenariosPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Scenarios"
        description="Saved cases will let users compare production forecasts, well plans, and reservoir assumptions."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {scenarios.map(([id, name, assumption, result]) => (
          <Link
            key={id}
            href={`/dashboard/scenarios/${id}`}
            className="rounded-lg border border-slate-200 bg-white p-5 hover:border-cyan-500"
          >
            <p className="font-semibold text-slate-950">{name}</p>
            <p className="mt-2 text-sm text-slate-500">{assumption}</p>
            <p className="mt-6 text-2xl font-semibold text-cyan-700">
              {result}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
