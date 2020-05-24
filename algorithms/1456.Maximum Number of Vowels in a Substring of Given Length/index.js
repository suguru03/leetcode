'use strict';

module.exports = { maxVowels };

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function maxVowels(s, k) {
  let max = 0;
  let count = 0;
  const set = new Set('aeiou');
  for (let i = 0; i < s.length; i++) {
    count += ~~set.has(s[i]) - ~~set.has(s[i - k]);
    max = Math.max(max, count);
  }
  return max;
}
