'use strict';

module.exports = { maxDotProduct };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxDotProduct(nums1, nums2) {
  const dp = Array.from(nums1, () => Array(nums2.length).fill(-Infinity));
  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const n2 = nums2[j];
      const prod = n1 * n2;
      const prev = i === 0 || j === 0 ? -Infinity : dp[i - 1][j - 1];
      dp[i][j] = Math.max(prod, prod + prev, prev);
      if (i > 0) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
      }
      if (j > 0) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
      }
    }
  }
  return dp[nums1.length - 1][nums2.length - 1];
}
