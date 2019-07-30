'use strict';

const assert = require('assert');
const _ = require('lodash');
const { tribonacci } = require('./');

describe('#tribonacci', () => {
  const tests = [
    {
      n: 4,
      result: 4,
    },
    {
      n: 25,
      result: 1389537,
    },
    {
      n: 37,
      result: 2082876103,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(tribonacci(n), result);
    });
  });
});
