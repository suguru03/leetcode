'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minSwap } = require('./');

describe('#minSwap', () => {
  const tests = [
    {
      A: [1, 3, 5, 4],
      B: [1, 2, 3, 7],
      result: 1,
    },
    {
      A: [3, 3, 8, 9, 10],
      B: [1, 7, 4, 6, 8],
      result: 1,
    },
    {
      A: [0, 3, 5, 8, 9],
      B: [2, 1, 4, 6, 9],
      result: 1,
    },
    {
      A: [1, 3, 4, 9, 10, 11, 12],
      B: [2, 7, 8, 6, 8, 9, 10],
      result: 2,
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`[${A}], [${B}] -> [${result}]`, () => {
      assert.strictEqual(minSwap(A, B), result);
    });
  });
});
