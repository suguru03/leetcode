'use strict';

const assert = require('assert');

const { nextPermutation } = require('./');

describe('#nextPermutation', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: [1, 3, 2],
    },
    {
      nums: [3, 2, 1],
      result: [1, 2, 3],
    },
    {
      nums: [1, 1, 5],
      result: [1, 5, 1],
    },
    {
      nums: [1],
      result: [1],
    },
    {
      nums: [1, 3, 2],
      result: [2, 1, 3],
    },
    {
      nums: [2, 3, 1],
      result: [3, 1, 2],
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      nextPermutation(nums);
      assert.deepStrictEqual(nums, result);
    });
  }
});
