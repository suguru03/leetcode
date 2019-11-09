'use strict';

module.exports = { mincostTickets };

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
  const max = Math.max(...days);
  const dp = Array(max).fill(0);
  const daySet = new Set(days.map(d => d - 1));
  for (let d = 0; d < max; d++) {
    if (!daySet.has(d)) {
      dp[d] = get(d - 1);
      continue;
    }
    const c1 = get(d - 1) + costs[0];
    const c7 = get(d - 7) + costs[1];
    const c30 = get(d - 30) + costs[2];
    dp[d] = Math.min(c1, c7, c30);
  }

  return dp[dp.length - 1];

  function get(i) {
    return dp[i] || 0;
  }
}
