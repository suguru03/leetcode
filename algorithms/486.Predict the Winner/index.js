'use strict';

module.exports = { PredictTheWinner };

function PredictTheWinner(nums) {
  const l = nums.length;
  const dp = Array(l);
  let i = l;
  while (i--) {
    dp[i] = Array(l);
    dp[i][i] = nums[i];
    for (let j = i + 1; j < l; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }
  return dp[0][l - 1] >= 0;
}
