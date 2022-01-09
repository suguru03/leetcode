'use strict';

const assert = require('assert');

const { findMin } = require('./');

describe('#findMin', () => {
  const tests = [
    {
      nums: [3, 4, 5, 1, 2],
      result: 1,
    },
    {
      nums: [4, 5, 6, 7, 0, 1, 2],
      result: 0,
    },
    {
      nums: [1, 2],
      result: 1,
    },
    {
      nums: [2, 1],
      result: 1,
    },
    {
      nums: [4, 5, 1, 2, 3],
      result: 1,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findMin(nums), result);
    });
  }
});
