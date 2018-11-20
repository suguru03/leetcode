'use strict';

module.exports = { diStringMatch };

/**
 * @param {string} S
 * @return {number[]}
 */
function diStringMatch(S) {
  let i = -1;
  let l = 0;
  let h = S.length;
  const arr = Array(h + 1);
  while (l <= h) {
    arr[++i] = S[i] === 'I' ? l++ : h--;
  }
  return arr;
}
