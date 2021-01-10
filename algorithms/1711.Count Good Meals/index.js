'use strict';

module.exports = { countPairs };

/**
 * @param {number[]} deliciousness
 * @return {number}
 */
function countPairs(deliciousness) {
  const map = new Map();
  let result = 0;
  let mod = 1e9 + 7;
  for (const n1 of deliciousness) {
    let power = 1;
    for (let i = 0; i < 22; i++) {
      const n2 = power - n1;
      power *= 2;
      if (!map.has(n2)) {
        continue;
      }
      result = (result + map.get(n2)) % mod;
    }
    map.set(n1, ~~map.get(n1) + 1);
  }
  return result;
}
