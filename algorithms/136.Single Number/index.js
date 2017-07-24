'use strict';

module.exports = { singleNumber };

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let l = nums.length;
  let result = 0;
  while (l--) {
    result ^= nums[l];
  }
  return result;
}
