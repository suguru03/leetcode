'use strict';

module.exports = { maxProduct, maxProduct2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  const dp = [...nums];
  let max = Math.max(...nums);
  for (let i = 1; i < n; i++) {
    for (let j = n - 1; j >= i; j--) {
      const n = nums[j] * dp[j - 1];
      max = Math.max(max, n);
      dp[j] = n;
    }
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct2(nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  const xdp = Array(n);
  const ndp = Array(n);
  let [max] = nums;
  xdp[0] = ndp[0] = max;
  for (let i = 1; i < n; i++) {
    const n = nums[i];
    const n1 = xdp[i - 1] * n;
    const n2 = ndp[i - 1] * n;
    xdp[i] = Math.max(n, n1, n2);
    ndp[i] = Math.min(n, n1, n2);
    max = Math.max(max, xdp[i]);
  }
  return max;
}
