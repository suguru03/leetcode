'use strict';

module.exports = { minSubArrayLen };

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let sum = 0;
  let min = Infinity;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum - nums[left] >= target) {
      sum -= nums[left++];
    }
    if (sum >= target) {
      min = Math.min(min, right - left + 1);
    }
  }

  return min === Infinity ? 0 : min;
}
