import { SectionHeader } from "@/components/dashboard/section-header";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Settings"
        description="Configure profile details, unit system, company defaults, and security settings."
      />
      <section className="grid gap-4 md:grid-cols-2">
        {["Unit system: Field", "Default forecast: Exponential decline", "Currency: USD", "Role: Engineer"].map(
          (item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-medium"
            >
              {item}
            </div>
          ),
        )}
      </section>
    </div>
  );
}
