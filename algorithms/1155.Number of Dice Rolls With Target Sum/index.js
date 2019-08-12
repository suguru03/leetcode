'use strict';

module.exports = { numRollsToTarget };

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
function numRollsToTarget(d, f, target) {
  const mod = 10 ** 9 + 7;
  const dp = Array(target).fill(0);
  for (let i = 0; i < f; i++) {
    dp[i] = 1;
  }
  for (let i = 1; i < d; i++) {
    for (let j = target - 1; j >= 0; j--) {
      dp[j] = 0;
      for (let k = 1; k <= f; k++) {
        const l = j - k;
        if (l < 0) {
          break;
        }
        dp[j] += dp[l] % mod;
      }
    }
  }
  return dp[target - 1] % mod;
}

function init(d, target) {
  return Array.from({ length: d }, () => Array(target).fill(0));
}

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
function numRollsToTarget(d, f, target, dp = init(d, target)) {}
