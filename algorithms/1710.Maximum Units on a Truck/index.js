'use strict';

module.exports = { maximumUnits };

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
function maximumUnits(boxTypes, truckSize) {
  const units = Array(1000 + 1).fill(0);
  for (const [n, u] of boxTypes) {
    units[u] += n;
  }
  let result = 0;
  for (let u = 1000; u >= 0; u--) {
    const n = Math.min(units[u], truckSize);
    result += n * u;
    truckSize -= n;
    if (truckSize === 0) {
      break;
    }
  }
  return result;
}
