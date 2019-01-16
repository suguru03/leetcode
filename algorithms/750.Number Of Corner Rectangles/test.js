'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countCornerRectangles } = require('./');

describe('#countCornerRectangles', () => {
  const tests = [
    {
      grid: [[1, 0, 0, 1, 0], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [1, 0, 1, 0, 1]],
      result: 1,
    },
    {
      grid: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
      result: 9,
    },
    {
      grid: [[1, 1, 1, 1]],
      result: 0,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.strictEqual(countCornerRectangles(grid), result);
    });
  });
});
