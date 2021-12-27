'use strict';

const assert = require('assert');

const { minimumTotal } = require('./');

describe('#minimumTotal', () => {
  const tests = [
    {
      triangle: [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
      result: 11,
    },
    {
      triangle: [[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]],
      result: -3,
    },
  ];
  for (const { triangle, result } of tests) {
    it(`${triangle} -> ${result}`, () => {
      assert.deepStrictEqual(minimumTotal(triangle), result);
    });
  }
});
