'use strict';

module.exports = { rotate };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  let start = -1;
  let count = 0;
  while (count < nums.length) {
    let from = ++start;
    let prev = nums[from];
    do {
      const to = (from + k) % nums.length;
      [from, prev, nums[to]] = [to, nums[to], prev];
    } while (++count < nums.length && start !== from);
  }
}
