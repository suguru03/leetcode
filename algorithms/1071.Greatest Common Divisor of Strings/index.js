'use strict';

module.exports = { gcdOfStrings, gcdOfStrings2 };

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  const l1 = str1.length;
  const l2 = str2.length;
  let cur = l1 < l2 ? str1 : str2;
  while (cur.length > 0) {
    if (check(str1, cur) && check(str2, cur)) {
      return cur;
    }
    cur = cur.slice(0, cur.length - 1);
  }
  return '';
}

function check(str, x) {
  const ls = str.length;
  const lx = x.length;
  if (ls % lx !== 0) {
    return false;
  }
  for (let i = 0; i < lx; i++) {
    const j = i % lx;
    if (str[i] !== x[j]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings2(str1, str2) {
  const l1 = str1.length;
  const l2 = str2.length;
  if (l1 < l2) {
    return gcdOfStrings(str2, str1);
  }
  if (l2 === 0) {
    return str1;
  }
  if (str1.slice(0, l2) !== str2) {
    return '';
  }
  return gcdOfStrings(str1.slice(l2), str2);
}
