'use strict';

module.exports = { countSegments, countSegments2 };

/**
 * @param {string} s
 * @return {number}
 */
function countSegments(s) {
  return s.split(' ').filter(c => c).length;
}

/**
 * @param {string} s
 * @return {number}
 */
function countSegments2(s) {
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
      c++;
    }
  }
  return c;
}
