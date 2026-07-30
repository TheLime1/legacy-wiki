import assert from 'node:assert/strict';
import test from 'node:test';
import {
  careerScore,
  expenseReduction,
  globalRebirthXp,
  income,
  jsRound,
  logarithmicBoost,
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

test('weights and caps global rebirth XP', () => {
  assert.equal(globalRebirthXp(10, 0, 0), 1.05);
  assert.equal(globalRebirthXp(0, 10, 0), 1.15);
  assert.equal(globalRebirthXp(0, 0, 10), 1.5);
  assert.equal(globalRebirthXp(100, 100, 100), 1.5);
});

test('squares peak level for Empire career score', () => {
  assert.equal(careerScore(1000, 50), 2_500_000);
});
