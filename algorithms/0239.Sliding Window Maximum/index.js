'use strict';

module.exports = { maxSlidingWindow };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const max = [...nums];
  for (let i = 1; i < nums.length; i++) {
    const m1 = max[i - 1] !== nums[i - k] ? max[i - 1] : Math.max(...nums.slice(i - k + 1, i));
    max[i] = Math.max(max[i], m1);
  }
  return max.slice(k - 1);
}
