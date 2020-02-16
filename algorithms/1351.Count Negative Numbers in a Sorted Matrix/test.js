'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countNegatives } = require('./');

describe('#countNegatives', () => {
  const tests = [
    {
      grid: [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]],
      result: 8,
    },
    {
      grid: [[4, 3, 2, 1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]],
      result: 7,
    },
    {
      grid: [[3, 2], [1, 0]],
      result: 0,
    },
    {
      grid: [[1, -1], [-1, -1]],
      result: 3,
    },
    {
      grid: [[-1]],
      result: 1,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(countNegatives(grid), result);
    });
  });
});
