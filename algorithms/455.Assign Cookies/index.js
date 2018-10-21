'use strict';

module.exports = { findContentChildren };

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  let result = 0;
  let i = g.length;
  let j = s.length - 1;
  g.sort((g1, g2) => g1 - g2);
  s.sort((s1, s2) => s1 - s2);
  while (--i >= 0 && j >= 0) {
    const gi = g[i];
    const sj = s[j];
    if (sj >= gi) {
      result++;
      j--;
    }
  }
  return result;
}
