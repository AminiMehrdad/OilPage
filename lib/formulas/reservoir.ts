import type { ReservoirInput } from "@/lib/types/domain";

export function stockTankOilInitiallyInPlace({
  areaAcres,
  netPayFeet,
  porosityPercent,
  oilSaturationPercent,
  formationVolumeFactor,
}: ReservoirInput) {
  if (formationVolumeFactor <= 0) {
    return 0;
  }

  const porosity = porosityPercent / 100;
  const oilSaturation = oilSaturationPercent / 100;
  const barrels =
    (7758 * areaAcres * netPayFeet * porosity * oilSaturation) /
    formationVolumeFactor;

  return Number(barrels.toFixed(2));
}

export function estimatedUltimateRecovery(input: ReservoirInput) {
  const stoiip = stockTankOilInitiallyInPlace(input);
  return Number((stoiip * (input.recoveryFactorPercent / 100)).toFixed(2));
}
