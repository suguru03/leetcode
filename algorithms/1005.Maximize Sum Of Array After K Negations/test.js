'use strict';

const assert = require('assert');
const _ = require('lodash');
const { largestSumAfterKNegations } = require('./');

describe('#largestSumAfterKNegations', () => {
  const tests = [
    {
      A: [4, 2, 3],
      K: 1,
      result: 5,
    },
    {
      A: [3, -1, 0, 2],
      K: 3,
      result: 6,
    },
    {
      A: [-8, 3, -5, -3, -5, -2],
      K: 6,
      result: 22,
    },
    {
      A: [-2, 5, 0, 2, -2],
      K: 3,
      result: 11,
    },
  ];

  _.forEach(tests, ({ A, K, result }) => {
    it(`${A}, ${K} -> ${result}`, () => {
      assert.deepStrictEqual(largestSumAfterKNegations(A, K), result);
    });
  });
});
