'use strict';

module.exports = { numRollsToTarget };

/**
 * @param {number} diceNum
 * @param {number} faceNum
 * @param {number} target
 * @return {number}
 */
function numRollsToTarget(diceNum, faceNum, target) {
  const mod = 10 ** 9 + 7;
  const dp = Array(target).fill(0);
  for (let face = 0; face < faceNum; face++) {
    dp[face] = 1;
  }
  for (let dice = 1; dice < diceNum; dice++) {
    for (let sum = target - 1; sum >= 0; sum--) {
      dp[sum] = 0;
      for (let face = 1; face <= faceNum; face++) {
        const prev = sum - face;
        if (prev < 0) {
          break;
        }
        dp[sum] += dp[prev] % mod;
      }
    }
  }
  return dp[target - 1] % mod;
}
