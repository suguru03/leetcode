'use strict';

module.exports = { twoCitySchedCost };

/**
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
  costs.sort(([a1, b1], [a2, b2]) => Math.abs(a2 - b2) - Math.abs(a1 - b1));
  let max = 0;
  let countA = costs.length / 2;
  let countB = costs.length / 2;
  for (const [ca, cb] of costs) {
    if (countA === 0) {
      countB--;
      max += cb;
      continue;
    }
    if (countB === 0) {
      countA--;
      max += ca;
      continue;
    }
    if (ca < cb) {
      countA--;
      max += ca;
    } else {
      countB--;
      max += cb;
    }
  }
  return max;
}
