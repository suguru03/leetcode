'use strict';

module.exports = { shortestToChar, shortestToChar2 };

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
  const chars = Array.from(S);
  const indices = [];
  for (const [index, c] of chars.entries()) {
    if (c === C) {
      indices.push(index);
    }
  }
  indices.push(Infinity);
  let left = 0;
  return chars.map((c, index) => {
    const d1 = Math.abs(indices[left] - index);
    const d2 = Math.abs(indices[left + 1] - index);
    if (d1 < d2) {
      return d1;
    }
    left++;
    return d2;
  });
}

/**
 * @see https://leetcode.com/problems/shortest-distance-to-a-character/discuss/125788/C%2B%2BJavaPython-2-Pass-with-Explanation
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar2(S, C) {
  let prev = -Infinity;
  const result = Array.from(S, (c, i) => {
    if (c === C) {
      prev = i;
    }
    return i - prev;
  });
  for (let i = prev - 1; i >= 0; i--) {
    if (S[i] === C) {
      prev = i;
    }
    result[i] = Math.min(result[i], prev - i);
  }
  return result;
}
