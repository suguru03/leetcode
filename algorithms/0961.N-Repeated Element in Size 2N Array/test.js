'use strict';

const assert = require('assert');
const _ = require('lodash');
const { repeatedNTimes } = require('./');

describe('#repeatedNTimes', () => {
  const tests = [
    {
      A: [1, 2, 3, 3],
      result: 3,
    },
    {
      A: [2, 1, 2, 5, 3, 2],
      result: 2,
    },
    {
      A: [5, 1, 5, 2, 5, 3, 5, 4],
      result: 5,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(repeatedNTimes(A), result);
    });
  });
});
