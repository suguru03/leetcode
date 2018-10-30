'use strict';

const assert = require('assert');
const _ = require('lodash');
const { islandPerimeter } = require('./');

describe('#islandPerimeter', () => {
  const tests = [
    {
      grid: [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]],
      result: 16,
    },
    {
      grid: [[0, 1, 1, 1], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]],
      result: 18,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(islandPerimeter(grid), result);
    });
  });
});
