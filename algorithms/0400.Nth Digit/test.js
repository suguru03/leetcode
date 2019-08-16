'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findNthDigit } = require('./');

describe('#findNthDigit', () => {
  const tests = [
    {
      n: 1,
      result: 1,
    },
    {
      n: 11,
      result: 0,
    },
    {
      n: 112,
      result: 6,
    },
    {
      n: 190,
      result: 1,
    },
    {
      n: 191,
      result: 0,
    },
    {
      n: 192,
      result: 0,
    },
    {
      n: 1421,
      result: 1,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(findNthDigit(n), result);
    });
  });
});
