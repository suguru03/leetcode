'use strict';

const assert = require('assert');
const _ = require('lodash');
const { consecutiveNumbersSum } = require('./');

describe('#consecutiveNumbersSum', () => {
  const tests = [
    {
      N: 2,
      result: 1,
    },
    {
      N: 5,
      result: 2,
    },
    {
      N: 9,
      result: 3,
    },
    {
      N: 15,
      result: 4,
    },
    {
      N: 84418900,
      result: 24,
    },
    {
      N: 246854111,
      result: 12,
    },
  ];

  _.forEach(tests, ({ N, result }) => {
    it(`${N} -> ${result}`, () => {
      assert.deepStrictEqual(consecutiveNumbersSum(N), result);
    });
  });
});
