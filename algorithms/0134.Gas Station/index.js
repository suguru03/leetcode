'use strict';

module.exports = { canCompleteCircuit };

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  let sum = 0;
  let min = Infinity;
  let minIndex = 0;
  for (const [i, g] of gas.entries()) {
    sum += g - cost[i];
    if (sum >= min) {
      continue;
    }
    min = sum;
    minIndex = i;
  }
  return sum >= 0 ? (minIndex + 1) % gas.length : -1;
}
