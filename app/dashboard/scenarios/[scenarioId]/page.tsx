import { SectionHeader } from "@/components/dashboard/section-header";

export default async function ScenarioDetailPage({
  params,
}: {
  params: Promise<{ scenarioId: string }>;
}) {
  const { scenarioId } = await params;

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Scenario Detail"
        description="This page is ready for scenario-specific database data, forecast charts, and exportable calculation assumptions."
      />
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">Scenario ID</p>
        <p className="mt-2 text-2xl font-semibold text-slate-950">
          {scenarioId}
        </p>
      </section>
    </div>
  );
}
