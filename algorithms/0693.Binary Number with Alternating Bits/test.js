'use strict';

const assert = require('assert');
const _ = require('lodash');
const { hasAlternatingBits } = require('./');

describe('#hasAlternatingBits', () => {
  const tests = [
    {
      n: 5,
      result: true,
    },
    {
      n: 7,
      result: false,
    },
    {
      n: 11,
      result: false,
    },
    {
      n: 10,
      result: true,
    },
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
      result: false,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(hasAlternatingBits(n), result);
    });
  });
});
