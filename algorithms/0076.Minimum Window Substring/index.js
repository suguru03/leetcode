'use strict';

module.exports = { minWindow };

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  let result = '';
  const countMap = new Map();
  const indexMap = new Map();
  for (const c of t) {
    countMap.set(c, countMap.has(c) ? countMap.get(c) + 1 : 1);
    if (indexMap.has(c)) {
      continue;
    }
    indexMap.set(c, []);
  }
  loop: for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!indexMap.has(c)) {
      continue;
    }
    const indices = indexMap.get(c);
    indices.push(i);
    if (indices.length > countMap.get(c)) {
      indices.shift();
    }
    let left = i;
    for (const [c1, indices] of indexMap) {
      if (indices.length !== countMap.get(c1)) {
        continue loop;
      }
      left = Math.min(left, indices[0]);
    }
    const next = s.slice(left, i + 1);
    if (next.length < result.length || result.length === 0) {
      result = next;
    }
  }
  return result;
}
