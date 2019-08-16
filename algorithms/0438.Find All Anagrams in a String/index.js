'use strict';

module.exports = { findAnagrams, findAnagrams2 };

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

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams2(s, p) {
  const list = Array(26).fill(0);
  const ls = s.length;
  const lp = p.length;
  for (let i = 0; i < lp; i++) {
    list[getIndex(p[i])]++;
  }
  let t = 0;
  let count = 0;
  const memo = Array(26).fill(0);
  const result = [];
  for (let i = 0; i < ls; i++) {
    const c = getIndex(s[i]);
    if (!list[c]) {
      while (count > 0) {
        reset();
      }
      continue;
    }
    while (list[c] === memo[c] || count === lp) {
      reset();
    }
    if (count <= 0) {
      t = i;
      count = 0;
    }
    count++;
    memo[c]++;
    if (count === lp) {
      result.push(t);
    }
  }
  return result;

  function reset() {
    memo[getIndex(s[t++])]--;
    count--;
  }
}

function getIndex(c) {
  return c.charCodeAt() - 97;
}
