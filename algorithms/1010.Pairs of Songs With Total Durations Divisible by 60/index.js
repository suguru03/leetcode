'use strict';

module.exports = { numPairsDivisibleBy60 };

/**
 * @param {number[]} time
 * @return {number}
 */
function numPairsDivisibleBy60(time) {
  const map = new Map();
  let count = 0;
  for (const t of time) {
    const mod = t % 60;
    count += map.get(mod === 0 ? 0 : 60 - mod) || 0;
    map.set(mod, map.has(mod) ? map.get(mod) + 1 : 1);
  }
  return count;
}
