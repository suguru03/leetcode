'use strict';

module.exports = { moveZeroes };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let j = 0;
  for (const [i, n] of nums.entries()) {
    if (n === 0) {
      continue;
    }
    [nums[i], nums[j++]] = [nums[j], n];
  }
}
