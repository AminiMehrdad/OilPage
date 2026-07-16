import { PredictionWorkspace } from "@/components/dashboard/prediction-workspace";
import { SectionHeader } from "@/components/dashboard/section-header";

export default function PredictionPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Prediction"
        description="Change decline assumptions and forecast months to see production prediction update immediately."
      />
      <PredictionWorkspace />
    </div>
  );
}
