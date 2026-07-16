import { SectionHeader } from "@/components/dashboard/section-header";
import { WellPlanningWorkspace } from "@/components/dashboard/well-planning-workspace";

export default function WellsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Well Planning"
        description="Estimate how many wells are necessary to reach a target production rate with uptime adjustment."
      />
      <WellPlanningWorkspace />
    </div>
  );
}
