'use strict';

const assert = require('assert');
const _ = require('lodash');
const { closedIsland } = require('./');

describe('#closedIsland', () => {
  const tests = [
    {
      grid: [
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
      ],
      result: 2,
    },

    {
      grid: [[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]],
      result: 1,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(closedIsland(grid), result);
    });
  });
});
