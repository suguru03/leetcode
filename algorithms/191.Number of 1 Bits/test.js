'use strict';

const assert = require('assert');
const _ = require('lodash');
const { hammingWeight } = require('./');

describe('#hammingWeight', () => {
  const tests = [
    {
      n: 11,
      result: 3,
    },
    {
      n: 2147483647,
      result: 31,
    },
    {
      n: 2147483648,
      result: 1,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(hammingWeight(n), result);
    });
  });
});
