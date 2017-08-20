'use strict';

module.exports = { rotate };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const l = nums.length;
  nums.push(...nums.splice(0, l - (k % l)));
}
