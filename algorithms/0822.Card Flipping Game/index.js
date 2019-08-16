'use strict';

module.exports = { flipgame };

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
function flipgame(fronts, backs) {
  const l = fronts.length;
  const map = {};
  for (let i = 0; i < l; i++) {
    const n = fronts[i];
    if (n === backs[i]) {
      map[n] = true;
    }
  }
  let min = Infinity;
  for (const n of fronts) {
    if (!map[n]) {
      min = Math.min(min, n);
    }
  }
  for (const n of backs) {
    if (!map[n]) {
      min = Math.min(min, n);
    }
  }
  return min === Infinity ? 0 : min;
}
