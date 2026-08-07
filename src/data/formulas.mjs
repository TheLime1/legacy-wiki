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

export function masteryNormalizedWork(level) {
  let total = 0;
  for (let k = 0; k < Math.max(0, Math.floor(level)); k += 1) {
    total += (k + 1) * 1.01 ** k;
  }
  return total;
}

export function masteryTierLevels(routeLevel) {
  const target = Math.max(masteryNormalizedWork(15), 2 * masteryNormalizedWork(routeLevel));
  const levels = [];
  let level = 0;
  let normalizedWork = 0;
  for (const scale of [1, 2, 4, 8]) {
    const scaledTarget = scale * target;
    while (normalizedWork < scaledTarget) {
      normalizedWork += (level + 1) * 1.01 ** level;
      level += 1;
    }
    levels.push(level);
  }
  return levels;
}

export function masteryMultiplier(percentages = []) {
  return 1 + percentages.reduce((sum, percentage) => sum + Math.max(0, percentage), 0) / 100;
}

export function income(baseIncome, level, multipliers = []) {
  return jsRound(baseIncome * (1 + Math.log10(level + 1)) * multipliers.reduce((a, b) => a * b, 1));
}

export function careerScore(careerPrestige, peakLevel) {
  return careerPrestige * Math.max(0, peakLevel) ** 2;
}
