'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxUncrossedLines } = require('./');

describe('#maxUncrossedLines', () => {
  const tests = [
    {
      A: [1, 4, 2],
      B: [1, 2, 4],
      result: 2,
    },
    {
      A: [2, 5, 1, 2, 5],
      B: [10, 5, 2, 1, 5, 2],
      result: 3,
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(maxUncrossedLines(A, B), result);
    });
  });
});
