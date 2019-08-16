'use strict';

module.exports = { titleToNumber };

/**
 * @param {string} s
 * @return {number}
 */
function titleToNumber(s) {
  let i = -1;
  let result = 0;
  const l = s.length;
  while (++i < l) {
    const n = s[i].charCodeAt() - 64;
    result += n * 26 ** (l - i - 1);
  }
  return result;
}
