'use strict';

module.exports = { findAnagrams };

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const map = {};
  const ls = s.length;
  const lp = p.length;
  for (let i = 0; i < lp; i++) {
    const c = p[i];
    map[c] = ++map[c] || 1;
  }
  let t;
  let memo = {};
  const cache = [];
  const result = [];
  for (let i = 0; i < ls; i++) {
    const c = s[i];
    if (!map[c]) {
      cache.length = 0;
      memo = {};
      continue;
    }
    while (map[c] === memo[c] || cache.length === lp) {
      memo[cache.shift()]--;
      t++;
    }
    if (cache.length === 0) {
      t = i;
    }
    cache.push(c);
    memo[c] = ++memo[c] || 1;
    if (cache.length === lp) {
      result.push(t);
    }
  }
  return result;
}
