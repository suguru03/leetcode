'use strict';

const assert = require('assert');
const _ = require('lodash');
const { shortestPathBinaryMatrix } = require('./');

describe('#shortestPathBinaryMatrix', () => {
  const tests = [
    {
      grid: [[0, 1], [1, 0]],
      result: 2,
    },
    {
      grid: [[0, 0, 0], [1, 1, 0], [1, 1, 0]],
      result: 4,
    },
    {
      grid: [[1, 0, 0], [1, 1, 0], [1, 1, 0]],
      result: -1,
    },
    {
      grid: [[0, 1, 0, 1], [1, 0, 1, 0], [1, 1, 1, 0], [1, 1, 1, 0]],
      result: 6,
    },
    {
      grid: [
        [0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [1, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 0, 1],
        [0, 0, 1, 0, 0, 0, 0],
      ],
      result: 10,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(shortestPathBinaryMatrix(grid), result);
    });
  });
});
