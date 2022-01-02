'use strict';

const assert = require('assert');

const { rob } = require('./');

describe('#rob', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: 4,
    },
    {
      nums: [1, 2, 3, 4],
      result: 6,
    },
    {
      nums: [1, 1, 3, 1, 1, 10, 1],
      result: 14,
    },
    {
      nums: [1, 1, 5, 1, 1, 1, 10, 1],
      result: 17,
    },
    {
      nums: [],
      result: 0,
    },
    {
      nums: [3, 1],
      result: 3,
    },
  ];

  for (const { nums, result } of tests) {
    it(`[${nums}] -> ${result}`, () => {
      assert.strictEqual(rob(nums), result);
    });
  }
});
