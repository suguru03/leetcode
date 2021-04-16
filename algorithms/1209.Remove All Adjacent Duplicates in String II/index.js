'use strict';

module.exports = { removeDuplicates };

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
  const stack = [];
  for (const c of s) {
    const last = stack[stack.length - 1];
    if (last?.c !== c) {
      stack.push({ c, count: 1 });
      continue;
    }
    if (++last.count === k) {
      stack.pop();
    }
  }
  return stack.reduce((str, { c, count }) => str + c.repeat(count), '');
}
