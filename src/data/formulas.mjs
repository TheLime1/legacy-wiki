export const constants = Object.freeze({
  daysPerYear: 365,
  freshAgeYears: 14,
  baseLifespanYears: 70,
  baseGameSpeed: 4,
  fixedStepSeconds: 0.05,
  updatesPerSecond: 20,
  maxFixedStepsPerAdvance: 200,
});

export function jsRound(value) {
  if (!Number.isFinite(value) || Object.is(value, 0) || Object.is(value, -0)) return value;
  const floor = Math.floor(value);
  const rounded = value - floor < 0.5 ? floor : floor + 1;
  return rounded === 0 && value < 0 ? -0 : rounded;
}

export function maxXp(baseMaxXp, level) {
  return jsRound(baseMaxXp * (level + 1) * 1.01 ** level);
}

export function linearEffect(level, coefficient) {
  return 1 + coefficient * level;
}

export function expenseReduction(level) {
  return Math.max(0.1, 1 - Math.log(level + 1) / Math.log(7) / 10);
}

export function logarithmicBoost(level, base) {
  return 1 + Math.log(level + 1) / Math.log(base);
}

export function globalRebirthXp(touchEye, embraceEvil, transcend) {
  const weighted = Math.min(
    100,
    Math.max(0, touchEye) + 3 * Math.max(0, embraceEvil) + 10 * Math.max(0, transcend),
  );
  return 1 + 0.005 * weighted;
}

export function income(baseIncome, level, multipliers = []) {
  return jsRound(baseIncome * (1 + Math.log10(level + 1)) * multipliers.reduce((a, b) => a * b, 1));
}

export function careerScore(careerPrestige, peakLevel) {
  return careerPrestige * Math.max(0, peakLevel) ** 2;
}
