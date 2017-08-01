'use strict';

module.exports = { majorityElement, majorityElement2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const map = {};
  let l = nums.length;
  const half = l / 2 | 0;
  let max = 0;
  let maxN = 0;
  while (l--) {
    const n = nums[l];
    const value = map[n] = ++map[n] || 1;
    if (value > half) {
      return n;
    }
    if (value > max) {
      max = value;
      maxN = n;
    }
  }
  return maxN;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement2(nums) {
  let l = nums.length;
  const half = l / 2 | 0;
  let maxN = 0;
  let count = 0;
  while (l--) {
    const n = nums[l];
    if (count === 0) {
      count++;
      maxN = n;
    } else if (maxN !== n) {
      count--;
    } else if (count++ > half) {
      return maxN;
    }
  }
  return maxN;
}
