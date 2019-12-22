'use strict';

const assert = require('assert');
const _ = require('lodash');
const { shortestPath } = require('./');

describe('#shortestPath', () => {
  const tests = [
    {
      grid: [[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]],
      k: 1,
      result: 6,
    },
    {
      grid: [[0, 1, 1], [1, 1, 1], [1, 0, 0]],
      k: 1,
      result: -1,
    },
  ];

  _.forEach(tests, ({ grid, k, result }) => {
    it(`${grid}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(shortestPath(grid, k), result);
    });
  });
});
