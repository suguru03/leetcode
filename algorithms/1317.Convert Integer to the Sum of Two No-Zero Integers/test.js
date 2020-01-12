'use strict';

const assert = require('assert');
const _ = require('lodash');
const { getNoZeroIntegers } = require('./');

describe('#getNoZeroIntegers', () => {
  const tests = [
    {
      n: 2,
      result: [1, 1],
    },
    {
      n: 11,
      result: [2, 9],
    },
    {
      n: 4102,
      result: [111, 3991],
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(getNoZeroIntegers(n), result);
    });
  });
});
