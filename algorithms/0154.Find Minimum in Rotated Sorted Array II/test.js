'use strict';

const assert = require('assert');

const { findMin } = require('./');

describe('#findMin', () => {
  const tests = [
    {
      nums: [1, 3, 5],
      result: 1,
    },
    {
      nums: [2, 2, 2, 0, 1],
      result: 0,
    },
    {
      nums: [3, 1, 3],
      result: 1,
    },
    {
      nums: [1],
      result: 1,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findMin(nums), result);
    });
  }
});
