'use strict';

module.exports = { strStr, strStr2, strStr3 };

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr2(haystack, needle) {
  if (!haystack && !needle) {
    return 0;
  }
  const nl = needle.length;
  const l = haystack.length - nl;
  let i = -1;
  while (++i <= l) {
    if (haystack[i] !== needle[0]) {
      continue;
    }
    if (haystack.substr(i, nl) === needle) {
      return i;
    }
  }
  return -1;
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr3(haystack, needle) {
  if (!haystack && !needle) {
    return 0;
  }
  const nl = needle.length;
  const l = haystack.length - nl;
  let i = -1;
  check: while (++i <= l) {
    if (haystack[i] !== needle[0]) {
      continue;
    }
    let j = -1;
    while (++j < nl) {
      if (haystack[i + j] !== needle[j]) {
        continue check;
      }
    }
    return i;
  }
  return -1;
}
