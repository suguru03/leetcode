'use strict';

const assert = require('assert');
const _ = require('lodash');
const { largestPalindrome } = require('./');

describe('#largestPalindrome', () => {
  const tests = [
    {
      n: 1,
      result: 9,
    },
    {
      n: 2,
      result: 987,
    },
    {
      n: 3,
      result: 123,
    },
    {
      n: 4,
      result: 597,
    },
    {
      n: 5,
      result: 677,
    },
    {
      n: 6,
      result: 1218,
    },
    {
      n: 7,
      result: 877,
    },
    {
      n: 8,
      result: 475,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(largestPalindrome(n), result);
    });
  });
});
