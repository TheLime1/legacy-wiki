import assert from 'node:assert/strict';
import test from 'node:test';
import {
  altarCost,
  careerScore,
  collapseAward,
  darkOrbGeneratorCost,
  darkOrbsPerDay,
  darkOrbUpgradeCost,
  darknessEffect,
  echoEfficiency,
  effectiveAgeRequirement,
  evilPerkPointsPerDay,
  expenseReduction,
  greatBaseXp,
  greatItemEffect,
  greatItemExpense,
  hypercubeCap,
  hypercubesPerDay,
  income,
  jsRound,
  logarithmicBoost,
  masteryMultiplier,
  masteryTierLevels,
  maxXp,
  metaverseAward,
  shopStewardBudget,
} from '../src/data/formulas.mjs';

test('uses JavaScript-compatible rounding', () => {
  assert.equal(jsRound(0.5), 1);
  assert.ok(Object.is(jsRound(-0.5), -0));
  assert.equal(jsRound(1.49), 1);
});

test('matches representative XP vectors', () => {
  assert.equal(maxXp(100, 0), 100);
  assert.equal(maxXp(100, 10), 1215);
  assert.equal(maxXp(100, 100), 27319);
  assert.equal(maxXp(100, 1000), 2098011479);
});

test('caps logarithmic expense reduction', () => {
  assert.equal(expenseReduction(0), 1);
  assert.ok(Math.abs(expenseReduction(100) - 0.7628297216558649) < 1e-12);
  assert.equal(expenseReduction(7 ** 9 - 1), 0.1);
});

test('matches logarithmic boosts and income rounding', () => {
  assert.ok(Math.abs(logarithmicBoost(10, 13) - 1.9348704159880588) < 1e-12);
  assert.equal(income(100, 10), 204);
  assert.equal(income(100, 1000), 400);
});

test('matches mastery tier boundaries for representative route levels', () => {
  assert.deepEqual(masteryTierLevels(10), [15, 21, 30, 40, 54, 72]);
  assert.deepEqual(masteryTierLevels(25), [35, 47, 63, 83, 108, 137]);
  assert.deepEqual(masteryTierLevels(100), [128, 161, 198, 240, 284, 332]);
  assert.deepEqual(masteryTierLevels(200), [242, 287, 335, 386, 439, 494]);
  assert.deepEqual(masteryTierLevels(666), [726, 787, 848, 909, 972, 1034]);
  assert.deepEqual(masteryTierLevels(1000), [1063, 1127, 1190, 1254, 1318, 1383]);
  assert.deepEqual(masteryTierLevels(1400), [1465, 1530, 1595, 1661, 1726, 1792]);
});

test('adds mastery percentages before forming one multiplier', () => {
  assert.equal(masteryMultiplier([2, 0.5, 0.1]), 1.026);
  assert.equal(masteryMultiplier([8, 2, 0.5]), 1.105);
});

test('squares peak level for Empire career score', () => {
  assert.equal(careerScore(1000, 50), 2_500_000);
});

test('matches Echo I efficiency around its remembered peak target', () => {
  assert.equal(echoEfficiency(0), 0.25);
  assert.equal(echoEfficiency(500), 0.625);
  assert.equal(echoEfficiency(1000), 1);
  assert.equal(echoEfficiency(2000), 1.05);
});

test('matches every Echo target through the Metaverse', () => {
  for (const target of [1000, 1250, 1500, 1750]) {
    assert.equal(echoEfficiency(0, target), 0.25);
    assert.equal(echoEfficiency(target / 2, target), 0.625);
    assert.equal(echoEfficiency(target, target), 1);
    assert.equal(echoEfficiency(target * 2, target), 1.05);
  }
});

test('matches Great task and item formulas', () => {
  assert.equal(greatBaseXp(0), 1e10);
  assert.equal(greatBaseXp(3), 1e10 * 1.7 ** 3);
  assert.equal(greatItemExpense(10, 0), 1e20);
  assert.equal(greatItemExpense(1e30, 0), 1e36);
  assert.equal(greatItemEffect(3), 9);
});

test('matches Darkness effects, awards, generator rates, and costs', () => {
  assert.equal(darknessEffect(99, 2 / 3), 1 + 4 / 3);
  assert.equal(collapseAward(5e10), 1);
  assert.equal(collapseAward(5e11), 15);
  assert.equal(darkOrbGeneratorCost(0), 1);
  assert.equal(darkOrbGeneratorCost(9), 19683);
  assert.equal(darkOrbUpgradeCost(25, 2), 400);
  assert.ok(Math.abs(darkOrbsPerDay(3, 100) - 0.245) < 1e-12);
  assert.ok(Math.abs(darkOrbsPerDay(3, 100, true) - 0.3675) < 1e-12);
});

test('matches Metaverse awards, Hypercube rates, caps, and altar costs', () => {
  assert.equal(metaverseAward(1000), 1);
  assert.equal(metaverseAward(10000), 13);
  assert.equal(hypercubesPerDay(0), 0.03);
  assert.equal(hypercubesPerDay(1), 0.0375);
  assert.equal(hypercubesPerDay(0, 2, 2), 0.12);
  assert.equal(hypercubeCap(0), 10000);
  assert.equal(hypercubeCap(9), 1000000);
  assert.equal(altarCost(500, 2), 4500);
});

test('matches Evil Perk Point generation and effective age reductions', () => {
  const base = evilPerkPointsPerDay(999, 9999);
  assert.ok(Math.abs(base - 6 / 365) < 1e-12);
  assert.ok(Math.abs(evilPerkPointsPerDay(999, 9999, true) - (6 / 365) * 1.25) < 1e-12);
  assert.equal(effectiveAgeRequirement(65, 10, 5), 15);
  assert.equal(effectiveAgeRequirement(1000, 9, 100), 100);
  assert.equal(shopStewardBudget(1000), 900);
});
