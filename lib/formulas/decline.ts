import type { DeclineInput, ProductionPoint } from "@/lib/types/domain";

export function forecastExponentialDecline({
  initialRate,
  annualDeclinePercent,
  months,
}: DeclineInput): ProductionPoint[] {
  const monthlyDecline = annualDeclinePercent / 100 / 12;

  return Array.from({ length: months }, (_, index) => {
    const oilRate = initialRate * Math.exp(-monthlyDecline * index);

    return {
      month: `M${index + 1}`,
      oilRate: Number(oilRate.toFixed(2)),
      gasRate: Number((oilRate * 0.85).toFixed(2)),
      waterRate: Number((initialRate * 0.12 + index * 4).toFixed(2)),
    };
  });
}
