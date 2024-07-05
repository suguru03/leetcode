'use strict';

const assert = require('assert');
const _ = require('lodash');

const { orangesRotting } = require('./');

describe('#orangesRotting', () => {
  const tests = [
    {
      grid: [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ],
      result: 4,
    },
    {
      grid: [
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ],
      result: -1,
    },
    {
      grid: [[0, 2]],
      result: 0,
    },
    {
      grid: [[0, 2, 2]],
      result: 0,
    },
    {
      grid: [
        [2, 1, 1],
        [1, 1, 1],
        [0, 1, 2],
      ],
      result: 2,
    },
    {
      grid: [[0]],
      result: 0,
    },
    {
      grid: [
        [2, 2],
        [1, 0],
      ],
      result: 1,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(orangesRotting(grid), result);
    });
  });
});
