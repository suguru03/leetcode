'use strict';

module.exports = { rob, rob2, rob3, rob4 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 2] || 0, nums[i - 3] || 0);
    max = Math.max(max, nums[i]);
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob2(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1], nums[i] + (nums[i - 2] || 0));
  }
  return nums[nums.length - 1] || 0;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob3(nums) {
  let prev = 0;
  let curr = 0;
  for (const n of nums) {
    [prev, curr] = [curr, Math.max(prev + n, curr)];
  }
  return curr;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob4(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] += Math.max(get(i - 2), get(i - 3));
  }
  return Math.max(0, ...nums.slice(-2));

  function get(index) {
    return index < 0 ? 0 : nums[index];
  }
}
