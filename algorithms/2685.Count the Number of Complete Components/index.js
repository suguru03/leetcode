'use strict';

module.exports = { countCompleteComponents };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countCompleteComponents(n, edges) {
  const map = new Map();
  for (const pair of edges) {
    for (const [i, x] of pair.entries()) {
      const y = pair[(i + 1) % pair.length];
      const list = map.get(x) ?? Array(n).fill(0);
      list[x] = 1;
      list[y] = 1;
      map.set(x, list);
    }
  }

  let count = 0;
  const seen = new Set();
  for (let x = 0; x < n; x++) {
    if (seen.has(x)) {
      continue;
    }
    if (!map.has(x)) {
      count++;
      continue;
    }

    const list = map.get(x);
    const target = list.join('');
    let valid = 1;
    for (const [y, flag] of list.entries()) {
      if (flag === 0) {
        continue;
      }

      valid &= map.get(y).join('') === target;
      seen.add(y);
    }
    count += valid;
  }

  return count;
}
