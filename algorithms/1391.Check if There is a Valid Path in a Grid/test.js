'use strict';

const assert = require('assert');
const _ = require('lodash');

const { hasValidPath } = require('./');

describe('#hasValidPath', () => {
  const tests = [
    {
      grid: [[2, 4, 3], [6, 5, 2]],
      result: true,
    },
    {
      grid: [[1, 2, 1], [1, 2, 1]],
      result: false,
    },
    {
      grid: [[6, 1, 3], [4, 1, 5]],
      result: true,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(hasValidPath(grid), result);
    });
  });
});
