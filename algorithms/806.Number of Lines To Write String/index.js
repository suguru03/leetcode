'use strict';

module.exports = { numberOfLines };

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
function numberOfLines(widths, S) {
  let sum = 0;
  let line = 1;
  for (let i = 0; i < S.length; i++) {
    const code = S[i].charCodeAt() - 97;
    const w = widths[code];
    if (sum + w > 100) {
      line++;
      sum = w;
    } else {
      sum += w;
    }
  }
  return [line, sum];
}
