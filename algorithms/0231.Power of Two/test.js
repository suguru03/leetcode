'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isPowerOfTwo } = require('./');

describe('#isPowerOfTwo', () => {
  const tests = [
    {
      n: 1,
      result: true,
    },
    {
      n: 2,
      result: true,
    },
    {
      n: 4,
      result: true,
    },
    {
      n: 6,
      result: false,
    },
    {
      n: 8,
      result: true,
    },
    {
      n: -2147483648,
      result: false,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(isPowerOfTwo(n), result);
    });
  });
});
