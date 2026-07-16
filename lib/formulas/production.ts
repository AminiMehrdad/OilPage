import type { ProductionPoint } from "@/lib/types/domain";

export function cumulativeOil(points: ProductionPoint[], daysPerMonth = 30) {
  return Number(
    points
      .reduce((total, point) => total + point.oilRate * daysPerMonth, 0)
      .toFixed(2),
  );
}

export function waterCutPercent(oilRate: number, waterRate: number) {
  const liquidRate = oilRate + waterRate;

  if (liquidRate <= 0) {
    return 0;
  }

  return Number(((waterRate / liquidRate) * 100).toFixed(2));
}

export function gasOilRatio(gasRate: number, oilRate: number) {
  if (oilRate <= 0) {
    return 0;
  }

  return Number((gasRate / oilRate).toFixed(2));
}
