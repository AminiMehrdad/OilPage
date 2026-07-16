import type { WellPlanningInput } from "@/lib/types/domain";

export function requiredWellCount({
  targetRate,
  averageWellRate,
  uptimePercent,
}: WellPlanningInput) {
  const uptimeFactor = uptimePercent / 100;
  const effectiveRate = averageWellRate * uptimeFactor;

  if (targetRate <= 0 || effectiveRate <= 0) {
    return 0;
  }

  return Math.ceil(targetRate / effectiveRate);
}
