'use strict';

module.exports = { reformat };

/**
 * @param {string} s
 * @return {string}
 */
function reformat(s) {
  const queue = [[], []];
  for (const c of s) {
    queue[~~isNaN(c)].push(c);
  }
  const [first, second] = queue.sort((r1, r2) => r2.length - r1.length);
  if (first.length - second.length > 1) {
    return '';
  }
  return first.reduce((str, char, index) => str + char + (second[index] || ''), '');
}
