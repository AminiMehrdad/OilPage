import { SectionHeader } from "@/components/dashboard/section-header";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Reports"
        description="Future report generation can export selected scenarios, formula inputs, forecast charts, and reservoir assumptions."
      />
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm leading-6 text-slate-600">
          Planned outputs: production forecast PDF, reservoir summary, well plan
          economics, and CSV export.
        </p>
      </section>
    </div>
  );
}
