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
  let result = '';
  while (la > 0 || lb > 0) {
    const na = +a[--la] || 0;
    const nb = +b[--lb] || 0;
    const sum = na + nb + prev;
    result = sum % 2 + result;
    prev = sum / 2 | 0;
  }
  if (prev) {
    result = prev + result;
  }
  return result;
}
