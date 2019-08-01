'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isMonotonic } = require('./');

describe('#isMonotonic', () => {
  const tests = [
    {
      A: [1, 2, 2, 3],
      result: true,
    },
    {
      A: [6, 5, 4, 4],
      result: true,
    },
    {
      A: [1, 3, 2],
      result: false,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(isMonotonic(A), result);
    });
  });
});
