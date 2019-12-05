'use strict';

module.exports = { rotate, rotate2 };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const l = nums.length;
  nums.push(...nums.splice(0, l - (k % l)));
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate2(nums, k) {
  const l = nums.length;
  let index = -1;
  let count = 0;
  while (count < l) {
    let current = ++index;
    let prev = nums[current];
    do {
      const next = (current + k) % l;
      [nums[next], prev, current] = [prev, nums[next], next];
      count++;
    } while (index !== current);
  }
}
