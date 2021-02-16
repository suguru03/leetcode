'use strict';

module.exports = { letterCasePermutation };

/**
 * @param {string} S
 * @return {string[]}
 */
function letterCasePermutation(S) {
  if (S.length === 0) {
    return [''];
  }
  const c = S.slice(-1);
  const num = /\d/.test(c);
  return letterCasePermutation(S.slice(0, -1)).flatMap((str) =>
    num ? `${str}${c}` : [`${str}${c.toLowerCase()}`, `${str}${c.toUpperCase()}`],
  );
}
