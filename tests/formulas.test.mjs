import assert from 'node:assert/strict';
import test from 'node:test';
import {
  careerScore,
  expenseReduction,
  income,
  jsRound,
  logarithmicBoost,
  masteryMultiplier,
  masteryTierLevels,
  maxXp,
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
  assert.deepEqual(masteryTierLevels(10), [15, 21, 30, 40]);
  assert.deepEqual(masteryTierLevels(25), [35, 47, 63, 83]);
  assert.deepEqual(masteryTierLevels(100), [128, 161, 198, 240]);
  assert.deepEqual(masteryTierLevels(200), [242, 287, 335, 386]);
  assert.deepEqual(masteryTierLevels(666), [726, 787, 848, 909]);
  assert.deepEqual(masteryTierLevels(1000), [1063, 1127, 1190, 1254]);
  assert.deepEqual(masteryTierLevels(1400), [1465, 1530, 1595, 1661]);
});

test('adds mastery percentages before forming one multiplier', () => {
  assert.equal(masteryMultiplier([2, 0.5, 0.1]), 1.026);
  assert.equal(masteryMultiplier([8, 2, 0.5]), 1.105);
});

test('squares peak level for Empire career score', () => {
  assert.equal(careerScore(1000, 50), 2_500_000);
});
