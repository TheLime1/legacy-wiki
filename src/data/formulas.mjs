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
  for (const scale of [1, 2, 4, 8, 16, 32]) {
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

export function echoEfficiency(resonancePeak, target = 1000) {
  if (!Number.isFinite(resonancePeak) || resonancePeak < 0) {
    throw new RangeError('resonancePeak must be finite and non-negative');
  }
  if (!Number.isFinite(target) || target <= 0) {
    throw new RangeError('target must be finite and positive');
  }
  return resonancePeak <= target
    ? 0.25 + (0.75 * resonancePeak) / target
    : 1 + 0.05 * Math.log2(resonancePeak / target);
}

function nonNegative(value, name) {
  if (!Number.isFinite(value) || value < 0) {
    throw new RangeError(`${name} must be finite and non-negative`);
  }
  return value;
}

function saturatingFloor(value) {
  if (Number.isNaN(value) || value <= 0) return 0;
  return Number.isFinite(value) ? Math.floor(value) : Number.MAX_VALUE;
}

export function greatBaseXp(rank) {
  return 1e10 * 1.7 ** nonNegative(rank, 'rank');
}

export function greatItemExpense(baseExpense, rank) {
  return Math.max(
    nonNegative(baseExpense, 'baseExpense') * 1e6,
    1e20 * 10 ** (nonNegative(rank, 'rank') / 3),
  );
}

export function greatItemEffect(baseEffect) {
  return 1 + 4 * (nonNegative(baseEffect, 'baseEffect') - 1);
}

export function darknessEffect(level, coefficient) {
  return 1 + nonNegative(coefficient, 'coefficient') * Math.log10(nonNegative(level, 'level') + 1);
}

export function collapseAward(essence, multiplier = 1) {
  const x = nonNegative(essence, 'essence') / 5e10;
  if (x < 1) return 0;
  return saturatingFloor(
    x ** 1.12 * (1 + 0.15 * Math.log10(x)) * nonNegative(multiplier, 'multiplier'),
  );
}

export function metaverseAward(runDarkMatter, multiplier = 1) {
  const y = nonNegative(runDarkMatter, 'runDarkMatter') / 1000;
  if (y < 1) return 0;
  return saturatingFloor(
    y ** 1.1 * (1 + 0.1 * Math.log10(y)) * nonNegative(multiplier, 'multiplier'),
  );
}

export function darkOrbGeneratorCost(rank) {
  return Math.ceil(3 ** nonNegative(rank, 'rank'));
}

export function darkOrbUpgradeCost(baseCost, rank) {
  return nonNegative(baseCost, 'baseCost') * 4 ** nonNegative(rank, 'rank');
}

export function darkOrbsPerDay(generatorRank, totalDarkMatter, darknessEleven = false) {
  const rate =
    0.01 *
    (2 ** nonNegative(generatorRank, 'generatorRank') - 1) *
    (1 + 0.25 * Math.sqrt(nonNegative(totalDarkMatter, 'totalDarkMatter')));
  return rate * (darknessEleven ? 1.5 : 1);
}

export function hypercubesPerDay(altarRank, itemMultiplier = 1, perkMultiplier = 1) {
  return (
    0.03 *
    nonNegative(itemMultiplier, 'itemMultiplier') *
    nonNegative(perkMultiplier, 'perkMultiplier') *
    1.25 ** nonNegative(altarRank, 'altarRank')
  );
}

export function hypercubeCap(totalMetaversePoints) {
  return 10000 * (1 + nonNegative(totalMetaversePoints, 'totalMetaversePoints')) ** 2;
}

export function altarCost(baseCost, rank) {
  return nonNegative(baseCost, 'baseCost') * 3 ** nonNegative(rank, 'rank');
}

export function evilPerkPointsPerDay(evil, essence, essenceEightComplete = false) {
  const base =
    (Math.log10(1 + Math.max(0, evil)) * (1 + 0.25 * Math.log10(1 + Math.max(0, essence)))) /
    constants.daysPerYear;
  return base * (essenceEightComplete ? 1.25 : 1);
}

export function effectiveAgeRequirement(baseYears, rank, yearsReducedPerRank) {
  return Math.max(0, baseYears - Math.max(0, rank) * Math.max(0, yearsReducedPerRank));
}

export function shopStewardBudget(income) {
  return Math.max(0, income) * 0.9;
}

export function income(baseIncome, level, multipliers = []) {
  return jsRound(baseIncome * (1 + Math.log10(level + 1)) * multipliers.reduce((a, b) => a * b, 1));
}

export function careerScore(careerPrestige, peakLevel) {
  return careerPrestige * Math.max(0, peakLevel) ** 2;
}
