'use strict';

module.exports = { containsNearbyDuplicate };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  const map = {};
  let i = nums.length;
  while (i--) {
    const n = nums[i];
    const j = map[n];
    if (j && j - i <= k) {
      return true;
    }
    map[n] = i;
  }
  return false;
}
