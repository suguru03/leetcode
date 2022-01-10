'use strict';

module.exports = { addBinary, addBinary2 };

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let la = a.length;
  let lb = b.length;
  let prev = 0;
  let res = '';
  while (la > 0 || lb > 0) {
    const na = +a[--la] || 0;
    const nb = +b[--lb] || 0;
    const s = na + nb + prev;
    res = (s % 2) + res;
    prev = (s / 2) | 0;
  }
  if (prev) {
    res = prev + res;
  }
  return res;
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary2(a, b) {
  let la = a.length;
  let lb = b.length;
  const result = Array(Math.max(la, lb)).fill(0);
  for (let i = 0; i < result.length; i++) {
    result[i] += (a[la - i - 1] | 0) + (b[lb - i - 1] | 0);
    if (result[i] <= 1) {
      continue;
    }
    result[i] %= 2;
    result[i + 1] = (result[i + 1] | 0) + 1;
  }
  return result.reverse().join('');
}
