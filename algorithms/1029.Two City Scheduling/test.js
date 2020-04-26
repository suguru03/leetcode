'use strict';

const assert = require('assert');
const _ = require('lodash');

// const { twoCitySchedCost } = require('./');

/**
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
  costs.sort(([a1, b1], [a2, b2]) => Math.abs(a2 - b2) - Math.abs(a1 - b1));
  let max = 0;
  let countA = costs.length / 2;
  let countB = costs.length / 2;
  for (const [ca, cb] of costs) {
    if (countA === 0) {
      countB--;
      max += cb;
      continue;
    }
    if (countB === 0) {
      countA--;
      max += ca;
      continue;
    }
    if (ca < cb) {
      countA--;
      max += ca;
    } else {
      countB--;
      max += cb;
    }
  }
  return max;
}

describe('#twoCitySchedCost', () => {
  const tests = [
    {
      costs: [[10, 20], [30, 200], [400, 50], [30, 20]],
      result: 110,
    },
    {
      costs: [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]],
      result: 1859,
    },
  ];

  _.forEach(tests, ({ costs, result }) => {
    it(`${costs} -> ${result}`, () => {
      assert.deepStrictEqual(twoCitySchedCost(costs), result);
    });
  });
});
