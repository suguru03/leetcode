'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minFallingPathSum } = require('./');

describe('#minFallingPathSum', () => {
  const tests = [
    {
      arr: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      result: 13,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(minFallingPathSum(arr), result);
    });
  });
});
