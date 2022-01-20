'use strict';

module.exports = { minEatingSpeed };

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  loop: while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    let count = 0;
    for (const pile of piles) {
      count += Math.ceil(pile / m);
      if (count <= h) {
        continue;
      }
      l = m + 1;
      continue loop;
    }
    r = m;
  }
  return r;
}
