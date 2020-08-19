'use strict';

const assert = require('assert');
const _ = require('lodash');

const { numsSameConsecDiff } = require('./');

describe('#numsSameConsecDiff', () => {
  const tests = [
    {
      N: 3,
      K: 7,
      result: [181, 292, 707, 818, 929],
    },
    {
      N: 2,
      K: 1,
      result: [10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98],
    },
    {
      N: 1,
      K: 0,
      result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ];

  _.forEach(tests, ({ N, K, result }) => {
    it(`${N}, ${K} -> ${result}`, () => {
      assert.deepStrictEqual(numsSameConsecDiff(N, K), result);
    });
  });
});
