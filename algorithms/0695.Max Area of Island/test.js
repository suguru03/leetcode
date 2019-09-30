'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxAreaOfIsland } = require('./');

describe('#maxAreaOfIsland', () => {
  const tests = [
    {
      grid: [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]],
      result: 4,
    },
    {
      grid: [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
      result: 6,
    },
    {
      grid: [[0, 1, 1], [1, 1, 1]],
      result: 5,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(maxAreaOfIsland(grid), result);
    });
  });
});
