'use strict';

module.exports = { checkPossibility };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
  let prev = -Infinity;
  let changed = false;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n >= prev) {
      prev = n;
      continue;
    }
    if (changed) {
      return false;
    }
    changed = true;
    if (i === 1 || n >= nums[i - 2]) {
      prev = n;
    }
  }
  return true;
}
