'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numMagicSquaresInside } = require('./');

describe('#numMagicSquaresInside', () => {
  const tests = [
    {
      grid: [[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]],
      result: 1,
    },
    {
      grid: [[5, 5, 5], [5, 5, 5], [5, 5, 5]],
      result: 0,
    },
    {
      grid: [[1, 8, 6], [10, 5, 0], [4, 2, 9]],
      result: 0,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(numMagicSquaresInside(grid), result);
    });
  });
});
