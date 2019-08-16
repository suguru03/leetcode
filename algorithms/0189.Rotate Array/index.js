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
  k = k % l;
  let count = 0;
  for (let i = 0; count < l; i++) {
    let current = i;
    let prev = nums[i];
    do {
      const next = (current + k) % l;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
      count++;
    } while (i !== current);
  }
}
