'use strict';

module.exports = { removeOuterParentheses };

/**
 * @param {string} S
 * @return {string}
 */
function removeOuterParentheses(S) {
  let result = '';
  let count = 0;
  for (const c of S) {
    if (c === '(') {
      if (count++ === 0) {
        continue;
      }
    } else if (--count === 0) {
      continue;
    }
    result += c;
  }
  return result;
}
