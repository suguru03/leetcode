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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum2(nums, k) {
  let sum = 0;
  let result = 0;
  const map = new Map([[0, 1]]);
  for (const num of nums) {
    sum += num;
    const diff = sum - k;
    if (map.has(diff)) {
      result += map.get(diff);
    }
    map.set(sum, ~~map.get(sum) + 1);
  }
  return result;
}
