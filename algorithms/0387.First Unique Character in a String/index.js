'use strict';

module.exports = { firstUniqChar, firstUniqChar2 };

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const chars = Array(26).fill(s.length);
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;
    chars[code] = chars[code] === s.length ? i : Infinity;
  }
  const min = Math.min(...chars);
  return min >= s.length ? -1 : min;
}
