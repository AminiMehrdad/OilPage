export type ProductionPoint = {
  month: string;
  oilRate: number;
  gasRate: number;
  waterRate: number;
};

export type DeclineInput = {
  initialRate: number;
  annualDeclinePercent: number;
  months: number;
};

export type WellPlanningInput = {
  targetRate: number;
  averageWellRate: number;
  uptimePercent: number;
};

export type ReservoirInput = {
  areaAcres: number;
  netPayFeet: number;
  porosityPercent: number;
  oilSaturationPercent: number;
  formationVolumeFactor: number;
  recoveryFactorPercent: number;
};

export type UserSession = {
  userId: string;
  name: string;
  email: string;
};
