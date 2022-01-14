'use strict';

const assert = require('assert');

const { searchInsert } = require('./');

describe('#searchInsert', () => {
  const tests = [
    {
      nums: [1, 3, 5, 6],
      target: 5,
      result: 2,
    },
    {
      nums: [1, 3, 5, 6],
      target: 2,
      result: 1,
    },
    {
      nums: [1, 3, 5, 6],
      target: 7,
      result: 4,
    },
    {
      nums: [1, 3, 5, 6],
      target: 0,
      result: 0,
    },
    {
      nums: [1, 3],
      target: 2,
      result: 1,
    },
    {
      nums: [1, 3, 5, 6],
      target: 7,
      result: 4,
    },
  ];

  for (const { nums, target, result } of tests) {
    it(`[${nums}], ${target} -> ${result}`, () => {
      assert.strictEqual(searchInsert(nums, target), result);
    });
  }
});
