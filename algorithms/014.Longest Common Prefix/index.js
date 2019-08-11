'use strict';

module.exports = {
  longestCommonPrefix,
  longestCommonPrefix2,
  longestCommonPrefix3,
  longestCommonPrefix4,
};

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

/**
 * @see https://github.com/axross/leetcode-typescript/blob/master/solutions/longestCommonPrefix.ts
 */
function longestCommonPrefix4(strs) {
  if (strs.length === 0) {
    return '';
  }

  const base = strs[0];
  const others = strs.slice(1);
  let searchFrom = 0;
  let searchTo = base.length;

  // do binary search
  while (searchFrom < searchTo) {
    const middle = Math.ceil((searchFrom + searchTo) / 2);
    const compareTarget = base.slice(0, middle);

    if (others.every(str => str.slice(0, middle) === compareTarget)) {
      searchFrom = middle;
    } else {
      searchTo = middle - 1;
    }
  }

  return base.slice(0, searchFrom);
}
