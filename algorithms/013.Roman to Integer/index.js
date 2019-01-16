'use strict';

module.exports = { romanToInt, romanToInt2 };

const hash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let l = s.length;
  let sum = 0;
  let prev = 0;
  while (l--) {
    const c = s[l];
    const n = hash[c];
    if (prev > n) {
      sum -= n;
    } else {
      sum += n;
    }
    prev = n;
  }
  return sum;
}

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt2(s) {
  const array = s.split('');
  let l = array.length;
  let sum = 0;
  let prev = 0;
  while (l--) {
    const c = array[l];
    const n = hash[c];
    if (prev > n) {
      sum -= n;
    } else {
      sum += n;
    }
    prev = n;
  }
  return sum;
}
