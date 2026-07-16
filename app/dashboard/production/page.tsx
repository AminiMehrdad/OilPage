import { SectionHeader } from "@/components/dashboard/section-header";
import { gasOilRatio, waterCutPercent } from "@/lib/formulas/production";

const rows = [
  { well: "SR-101", oil: 1240, gas: 980, water: 210, pressure: 2860 },
  { well: "SR-112", oil: 860, gas: 740, water: 330, pressure: 2410 },
  { well: "SR-118", oil: 1450, gas: 1120, water: 180, pressure: 3025 },
];

export default function ProductionPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Production"
        description="Enter or import daily well production. This starter page demonstrates calculated water cut and gas-oil ratio from user-style inputs."
      />
      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              {["Well", "Oil STB/d", "Gas MSCF/d", "Water STB/d", "Pressure psi", "Water cut", "GOR"].map(
                (heading) => (
                  <th key={heading} className="px-4 py-3 font-medium">
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.well} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{row.well}</td>
                <td className="px-4 py-3">{row.oil.toLocaleString()}</td>
                <td className="px-4 py-3">{row.gas.toLocaleString()}</td>
                <td className="px-4 py-3">{row.water.toLocaleString()}</td>
                <td className="px-4 py-3">{row.pressure.toLocaleString()}</td>
                <td className="px-4 py-3">
                  {waterCutPercent(row.oil, row.water)}%
                </td>
                <td className="px-4 py-3">{gasOilRatio(row.gas, row.oil)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
