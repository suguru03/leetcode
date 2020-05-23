'use strict';

module.exports = { frequencySort };

/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  const map = new Map();
  for (const c of s) {
    map.set(c, ~~map.get(c) + 1);
  }
  return Array.from(map)
    .sort(([, c1], [, c2]) => c2 - c1)
    .map(([char, count]) => char.repeat(count))
    .join('');
}
