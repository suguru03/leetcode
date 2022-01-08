'use strict';

const assert = require('assert');

const { findPeakElement } = require('./');

describe('#findPeakElement', () => {
  const tests = [
    {
      nums: [1, 2, 3, 1],
      result: 2,
    },
    {
      nums: [1, 2, 1, 3, 5, 6, 4],
      result: 5,
    },
    {
      nums: [1, 2],
      result: 1,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findPeakElement(nums), result);
    });
  }
});
