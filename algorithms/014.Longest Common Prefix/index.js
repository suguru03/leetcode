'use strict';

module.exports = { longestCommonPrefix, longestCommonPrefix2, longestCommonPrefix3 };

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
  let i = -1;
  const l = Math.min(s1.length, s2.length, min);
  while (++i < l) {
    if (s1[i] !== s2[i]) {
      break;
    }
  }
  return i;
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

function longestCommonPrefix3(strs) {
  const l = strs.length;
  const [str = ''] = strs;
  if (l <= 1) {
    return str;
  }
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    for (let j = 1; j < l; j++) {
      if (strs[j][i] !== c) {
        return result;
      }
    }
    result += c;
  }
  return result;
}
