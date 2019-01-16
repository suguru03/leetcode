'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countPrimes } = require('./');

describe('#countPrimes', () => {
  const tests = [
    {
      n: 0,
      result: 0,
    },
    {
      n: 2,
      result: 0,
    },
    {
      n: 3,
      result: 1,
    },
    {
      n: 5,
      result: 2,
    },
    {
      n: 6,
      result: 3,
    },
    {
      n: 10000,
      result: 1229,
    },
    {
      n: 500000,
      result: 41538,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(countPrimes(n), result);
    });
  });
});
