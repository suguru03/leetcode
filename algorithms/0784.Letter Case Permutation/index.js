'use strict';

module.exports = { letterCasePermutation };

/**
 * @param {string} S
 * @return {string[]}
 */
function letterCasePermutation(S) {
  S = S.toLowerCase();
  const l = S.length;
  return create('', 0);
  function create(s, i) {
    if (i === l) {
      return [s];
    }
    const c = S[i++];
    const code = c.charCodeAt();
    const result = [];
    if (code >= 97 && code <= 122) {
      result.push(...create(s + c, i), ...create(s + c.toUpperCase(), i));
    } else {
      result.push(...create(s + c, i));
    }
    return result;
  }
}
