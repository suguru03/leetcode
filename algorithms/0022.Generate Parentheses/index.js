'use strict';

module.exports = { generateParenthesis };

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];
  backtrack('', 0, 0);
  return result;

  function backtrack(cur, left, right) {
    if (cur.length === n * 2) {
      result.push(cur);
      return;
    }
    if (left < n) {
      backtrack(cur + '(', left + 1, right);
    }
    if (right < left) {
      backtrack(cur + ')', left, right + 1);
    }
  }
}
