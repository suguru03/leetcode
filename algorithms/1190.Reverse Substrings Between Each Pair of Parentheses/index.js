'use strict';

module.exports = { reverseParentheses };

/**
 * @param {string} s
 * @return {string}
 */
function reverseParentheses(s) {
  const queue = [];
  let cur = [];
  for (const c of s) {
    switch (c) {
      case '(':
        queue.push(cur);
        cur = [];
        continue;
      case ')':
        cur = [...queue.pop(), ...cur.reverse()];
        continue;
      default:
        cur.push(c);
    }
  }
  return cur.join('');
}
