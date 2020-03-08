'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minCost } = require('./');

describe('#minCost', () => {
  const tests = [
    {
      grid: [[1, 1, 1, 1], [2, 2, 2, 2], [1, 1, 1, 1], [2, 2, 2, 2]],
      result: 3,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(minCost(grid), result);
    });
  });
});
