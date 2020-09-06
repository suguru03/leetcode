'use strict';

const assert = require('assert');
const _ = require('lodash');

const { largestOverlap } = require('./');

describe('#largestOverlap', () => {
  const tests = [
    {
      A: [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
      B: [[0, 0, 0], [0, 1, 1], [0, 0, 1]],
      result: 3,
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(largestOverlap(A, B), result);
    });
  });
});
