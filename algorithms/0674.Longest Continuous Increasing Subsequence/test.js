'use strict';

const assert = require('assert');

const { findLengthOfLCIS } = require('./');

describe('#findLengthOfLCIS', () => {
  const tests = [
    {
      nums: [1, 3, 5, 4, 7],
      result: 3,
    },
    {
      nums: [2, 2, 2, 2, 2],
      result: 1,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findLengthOfLCIS(nums), result);
    });
  }
});
