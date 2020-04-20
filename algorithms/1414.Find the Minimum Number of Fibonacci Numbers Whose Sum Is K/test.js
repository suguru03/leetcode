'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findMinFibonacciNumbers } = require('./');

describe('#findMinFibonacciNumbers', () => {
  const tests = [
    {
      k: 7,
      result: 2,
    },
    {
      k: 10,
      result: 2,
    },
    {
      k: 19,
      result: 3,
    },
  ];

  _.forEach(tests, ({ k, result }) => {
    it(`${k} -> ${result}`, () => {
      assert.deepStrictEqual(findMinFibonacciNumbers(k), result);
    });
  });
});
