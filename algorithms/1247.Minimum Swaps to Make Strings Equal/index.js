'use strict';

module.exports = { minimumSwap };

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
function minimumSwap(s1, s2) {
  const c = { x: 0, y: 0 };
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      c[s1[i]]++;
    }
  }
  if ((c.x + c.y) % 2 === 1) {
    return -1;
  }
  return ((c.x / 2) | 0) + (c.x % 2) + ((c.y / 2) | 0) + (c.y % 2);
}
