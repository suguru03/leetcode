'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minPathSum } = require('./');

describe('#minPathSum', () => {
  const tests = [
    {
      grid: [[1, 3, 1], [1, 5, 1], [4, 2, 1]],
      result: 7,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(minPathSum(grid), result);
    });
  });
});
