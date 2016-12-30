'use strict';

module.exports = { longestCommonPrefix, longestCommonPrefix2 };

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  const s = strs[0] || '';
  let l = strs.length;
  if (l <= 1) {
    return s;
  }
  let min = Infinity;
  while (l-- > 1 && min) {
    min = Math.min(getPrefixLength(strs[l], strs[l - 1], min), min);
  }
  return s.substr(0, min);
}

function getPrefixLength(s1, s2, min) {
  let l = Math.min(s1.length, s2.length, min);
  while (l) {
    const i = l - 1;
    if (s1[i] === s2[i]) {
      break;
    }
    l--;
  }
  return l;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix2(strs) {
  const s = strs[0] || '';
  let l = strs.length;
  if (l <= 1) {
    return s;
  }
  let min = Infinity;
  while (l-- > 1 && min) {
    min = Math.min(getPrefixLength2(strs[l], strs[l - 1]), min);
  }
  return s.substr(0, min);
}

function getPrefixLength2(s1, s2) {
  let i = -1;
  const l = Math.min(s1.length, s2.length);
  while (++i < l) {
    if (s1[i] !== s2[i]) {
      break;
    }
  }
  return i;
}

