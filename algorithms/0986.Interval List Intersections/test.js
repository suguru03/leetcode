'use strict';

const assert = require('assert');
const _ = require('lodash');

const { intervalIntersection } = require('./');

describe('#intervalIntersection', () => {
  const tests = [
    {
      A: [[0, 2], [5, 10], [13, 23], [24, 25]],
      B: [[1, 5], [8, 12], [15, 24], [25, 26]],
      result: [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]],
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(intervalIntersection(A, B), result);
    });
  });
});
