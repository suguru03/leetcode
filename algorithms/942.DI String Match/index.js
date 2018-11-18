'use strict';

module.exports = { diStringMatch };

/**
 * @param {string} S
 * @return {number[]}
 */
function diStringMatch(S) {
  const arr = [];
  let i = -1;
  let l = 0;
  let h = S.length;
  while (l <= h) {
    arr.push(S[++i] === 'I' ? l++ : h--);
  }
  return arr;
}
