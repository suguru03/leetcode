'use strict';

module.exports = { minCostClimbingStairs };

/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  let l = cost.length - 2;
  while (l--) {
    cost[l] += Math.min(cost[l + 1], cost[l + 2]);
  }
  return Math.min(cost[0], cost[1]);
}
