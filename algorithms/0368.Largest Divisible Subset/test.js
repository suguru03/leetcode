'use strict';

const assert = require('assert');
const _ = require('lodash');

const { largestDivisibleSubset } = require('./');

describe('#largestDivisibleSubset', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: [1, 2],
    },
    {
      nums: [1, 2, 4, 8],
      result: [1, 2, 4, 8],
    },
    {
      nums: [],
      result: [],
    },
    {
      nums: [5, 9, 18, 54, 108, 540, 90, 180, 360, 720],
      result: [9, 18, 90, 180, 360, 720],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(largestDivisibleSubset(nums), result);
    });
  });
});
