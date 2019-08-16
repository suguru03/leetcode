'use strict';

module.exports = { shortestToChar };

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
  const l = S.length;
  const cmap = [];
  for (let i = 0; i < l; i++) {
    if (S[i] === C) {
      cmap.push(i);
    }
  }
  let c = 0;
  const result = [];
  for (let i = 0; i < l; i++) {
    const d0 = fix(cmap[c - 1]);
    const d1 = fix(cmap[c]);
    const m = Math.min(Math.abs(d0 - i), Math.abs(d1 - i));
    result.push(m);
    if (i >= d1) {
      c++;
    }
  }
  return result;

  function fix(c) {
    return c !== undefined ? c : Infinity;
  }
}
