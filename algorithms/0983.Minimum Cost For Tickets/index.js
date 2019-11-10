'use strict';

module.exports = { mincostTickets };

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
  const [c1, c7, c30] = costs;
  const max = Math.max(...days);
  const dp = Array(max).fill(0);
  const daySet = new Set(days.map(d => d - 1));
  for (let d = 0; d < max; d++) {
    if (!daySet.has(d)) {
      dp[d] = get(d - 1);
      continue;
    }
    const s1 = get(d - 1) + c1;
    const s7 = get(d - 7) + c7;
    const s30 = get(d - 30) + c30;
    dp[d] = Math.min(s1, s7, s30);
  }

  return dp[dp.length - 1];

  function get(i) {
    return dp[i] || 0;
  }
}
