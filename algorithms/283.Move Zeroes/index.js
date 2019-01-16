'use strict';

module.exports = { moveZeroes };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  const l = nums.length;
  let pos = 0;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    if (n !== 0) {
      nums[pos++] = n;
    }
  }
  while (pos < l) {
    nums[pos++] = 0;
  }
}
