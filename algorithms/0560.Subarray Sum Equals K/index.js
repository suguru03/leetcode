'use strict';

module.exports = { subarraySum, subarraySum2 };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  const l = nums.length;
  const dp = [...nums];
  let count = dp.filter(n => n === k).length;
  for (let i = 1; i < l; i++) {
    for (let j = l - 1; j >= i; j--) {
      dp[j] = dp[j - 1] + nums[j];
      if (dp[j] === k) {
        count++;
      }
    }
  }
  return count;
}

/**
 * @see https://leetcode.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum2(nums, k) {
  let sum = 0;
  let count = 0;
  const map = new Map();
  map.set(0, 1);
  for (const n of nums) {
    sum += n;
    const diff = sum - k;
    count += map.get(diff) || 0;
    map.set(sum, ~~map.get(sum) + 1);
  }
  return count;
}
