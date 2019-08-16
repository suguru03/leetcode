'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minCostClimbingStairs } = require('./');

describe('#minCostClimbingStairs', () => {
  const tests = [
    {
      cost: [10, 15, 20],
      result: 15,
    },
    {
      cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
      result: 6,
    },
  ];

  _.forEach(tests, ({ cost, result }) => {
    it(`${cost} -> ${result}`, () => {
      assert.strictEqual(minCostClimbingStairs(cost), result);
    });
  });
});
