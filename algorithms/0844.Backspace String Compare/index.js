'use strict';

module.exports = { backspaceCompare, backspaceCompare2 };

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {
  return format(S) === format(T);
}

function format(str) {
  let l = str.length;
  let s = '';
  let skip = 0;
  while (--l >= 0) {
    const c = str[l];
    if (c === '#') {
      skip++;
      continue;
    }
    if (skip > 0) {
      skip--;
      continue;
    }
    s = c + s;
  }
  return s;
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare2(S, T) {
  let si = S.length - 1;
  let sb = 0;
  let ti = T.length - 1;
  let tb = 0;
  while (si >= 0 || ti >= 0) {
    if (S[si] === '#') {
      si--;
      sb++;
      continue;
    }
    if (T[ti] === '#') {
      ti--;
      tb++;
      continue;
    }
    if (sb) {
      si--;
      sb--;
      continue;
    }
    if (tb) {
      ti--;
      tb--;
      continue;
    }
    if (S[si] !== T[ti]) {
      return false;
    }
    si--;
    ti--;
  }
  return true;
}
