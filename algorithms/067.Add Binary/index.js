'use strict';

module.exports = { addBinary };

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
