'use strict';

const assert = require('assert');
const _ = require('lodash');
const { peakIndexInMountainArray } = require('./');

describe('#peakIndexInMountainArray', () => {
  const tests = [
    {
      A: [0, 1, 0],
      result: 1,
    },
    {
      A: [0, 2, 1, 0],
      result: 1,
    },
    {
      A: [40, 48, 61, 75, 100, 99, 98, 39, 30, 10],
      result: 4,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(peakIndexInMountainArray(A), result);
    });
  });
});
