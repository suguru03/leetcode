'use strict';

module.exports = { sortColors };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const counts = [0, 0, 0];
  for (const n of nums) {
    counts[n]++;
  }
  let i = 0;
  for (const [n, count] of counts.entries()) {
    for (let j = 0; j < count; j++) {
      nums[i++] = n;
    }
  }
}
