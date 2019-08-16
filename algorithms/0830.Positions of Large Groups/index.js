'use strict';

module.exports = { largeGroupPositions };

/**
 * @param {string} S
 * @return {number[][]}
 */
function largeGroupPositions(S) {
  const result = [];
  let start = -1;
  for (let i = 0; i <= S.length; i++) {
    const c = S[i];
    if (S[start] === c) {
      continue;
    }
    if (i - start >= 3) {
      result.push([start, i - 1]);
    }
    start = i;
  }
  return result;
}
