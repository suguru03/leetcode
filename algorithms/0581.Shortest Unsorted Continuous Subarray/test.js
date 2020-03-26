'use strict';

const assert = require('assert');
const _ = require('lodash');
// const { findUnsortedSubarray } = require('./');

/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  let left = -1;
  let right = -1;
  let min = Infinity;
  let max = -Infinity;
  for (const [i, n1] of nums.entries()) {
    const j = nums.length - i - 1;
    const n2 = nums[j];
    if (n1 < max) {
      right = i;
    } else {
      max = n1;
    }
    if (n2 > min) {
      left = j;
    } else {
      min = n2;
    }
  }
  return left === right ? 0 : right - left + 1;
}

describe('#findUnsortedSubarray', () => {
  const tests = [
    {
      nums: [2, 6, 4, 8, 10, 9, 15],
      result: 5,
    },
    {
      nums: [2, 4, 8, 10],
      result: 0,
    },
    {
      nums: [2, 4, 8, 10, 1],
      result: 5,
    },
    {
      nums: [2, 6, 4, 8, 10, 1, 2],
      result: 7,
    },
    {
      nums: [1, 3, 2, 2, 2],
      result: 4,
    },
    {
      nums: [1, 2, 2, 2, 3],
      result: 0,
    },
    {
      nums: [1, 2, 3, 3, 3],
      result: 0,
    },
    {
      nums: [2, 3, 3, 2, 4],
      result: 3,
    },
    {
      nums: [1, 2, 4, 5, 3],
      result: 3,
    },
    {
      nums: [1, 3, 5, 2, 4],
      result: 4,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(findUnsortedSubarray(nums), result);
    });
  });
});
