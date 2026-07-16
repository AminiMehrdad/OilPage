import { ReservoirWorkspace } from "@/components/dashboard/reservoir-workspace";
import { SectionHeader } from "@/components/dashboard/section-header";

export default function ReservoirPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Reservoir"
        description="Calculate volumetric oil in place and estimated ultimate recovery from reservoir assumptions."
      />
      <ReservoirWorkspace />
    </div>
  );
}
