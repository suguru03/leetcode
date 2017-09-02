'use strict';

module.exports = { containsDuplicate };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[n]) {
      return true;
    }
    map[n] = true;
  }
  return false;
}
