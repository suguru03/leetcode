'use strict';

module.exports = { majorityElement, majorityElement2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const map = {};
  for (const n of nums) {
    map[n] = ++map[n] || 1;
    if (map[n] > nums.length / 2) {
      return n;
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement2(nums) {
  let count = 0;
  let candidate;
  for (const n of nums) {
    if (count === 0) {
      candidate = n;
    }
    count += n === candidate ? 1 : -1;
  }
  return candidate;
}
