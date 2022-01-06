'use strict';

const assert = require('assert');

// const { searchRange } = require('./');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const left = findLeft(nums, target);
  return [left, findRight(nums, target, left)];
}

function findLeft(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l] === target ? l : -1;
}

function findRight(nums, target, l) {
  if (l === -1) {
    return -1;
  }
  let r = nums.length;
  while (l + 1 < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] <= target) {
      l = m;
    } else {
      r = m;
    }
  }
  return l;
}

describe('#searchRange', () => {
  const tests = [
    {
      nums: [5, 7, 7, 8, 8, 10],
      target: 8,
      result: [3, 4],
    },
    {
      nums: [5, 7, 7, 8, 8, 10],
      target: 6,
      result: [-1, -1],
    },
    {
      nums: [5, 7, 7, 7, 7, 7, 7, 8, 8, 10],
      target: 7,
      result: [1, 6],
    },
    {
      nums: [2, 2],
      target: 2,
      result: [0, 1],
    },
    {
      nums: [1, 4],
      target: 4,
      result: [1, 1],
    },
  ];

  for (const { nums, target, result } of tests) {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(searchRange(nums, target), result);
    });
  }
});
