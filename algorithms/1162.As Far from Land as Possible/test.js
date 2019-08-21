'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxDistance } = require('./');

describe('#maxDistance', () => {
  const tests = [
    {
      grid: [[1, 0, 1], [0, 0, 0], [1, 0, 1]],
      result: 2,
    },
    {
      grid: [[1, 0, 0], [0, 0, 0], [0, 0, 0]],
      result: 4,
    },
    {
      grid: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      result: -1,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(maxDistance(grid), result);
    });
  });
});
