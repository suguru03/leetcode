'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxIncreaseKeepingSkyline } = require('./');

describe('#maxIncreaseKeepingSkyline', () => {
  const tests = [
    {
      grid: [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]],
      result: 35,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`[${grid}] -> [${result}]`, () => {
      assert.deepStrictEqual(maxIncreaseKeepingSkyline(grid), result);
    });
  });
});
