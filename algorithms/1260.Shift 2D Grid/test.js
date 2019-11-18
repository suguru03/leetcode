'use strict';

const assert = require('assert');
const _ = require('lodash');
const { shiftGrid } = require('./');

describe('#shiftGrid', () => {
  const tests = [
    {
      grid: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      k: 1,
      result: [[9, 1, 2], [3, 4, 5], [6, 7, 8]],
    },
  ];

  _.forEach(tests, ({ grid, k, result }) => {
    it(`${grid}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(shiftGrid(grid, k), result);
    });
  });
});
