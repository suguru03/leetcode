'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countServers } = require('./');

describe('#countServers', () => {
  const tests = [
    {
      grid: [[1, 0], [0, 1]],
      result: 0,
    },
    {
      grid: [[1, 0], [1, 1]],
      result: 3,
    },
    {
      grid: [[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]],
      result: 4,
    },
    {
      grid: [[1, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0]],
      result: 3,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(countServers(grid), result);
    });
  });
});
