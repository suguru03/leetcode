'use strict';

module.exports = { minCostToMoveChips };

/**
 * @param {number[]} chips
 * @return {number}
 */
function minCostToMoveChips(chips) {
  const counts = [0, 0];
  for (const n of chips) {
    counts[n % 2]++;
  }
  return Math.min(...counts);
}
