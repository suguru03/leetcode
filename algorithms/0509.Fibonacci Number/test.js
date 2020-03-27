'use strict';

const assert = require('assert');
const _ = require('lodash');
const { fib } = require('./');

describe('#fib', () => {
  const tests = [
    {
      N: 2,
      result: 1,
    },
    {
      N: 3,
      result: 2,
    },
    {
      N: 4,
      result: 3,
    },
    {
      N: 0,
      result: 0,
    },
    {
      N: 30,
      result: 832040,
    },
  ];

  _.forEach(tests, ({ N, result }) => {
    it(`${N} -> ${result}`, () => {
      assert.deepStrictEqual(fib(N), result);
    });
  });
});
