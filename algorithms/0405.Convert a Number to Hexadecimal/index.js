'use strict';

module.exports = { toHex, toHex2 };

const max = Math.pow(2, 32);
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

/**
 * @param {number} num
 * @return {string}
 */
function toHex(n) {
  if (n === 0) {
    return '0';
  }
  let result = '';
  if (n < 0) {
    n = max + n;
  }
  while (n > 0) {
    const d = n % 16;
    result = hex[d] + result;
    n = (n - d) / 16;
  }
  return result;
}

/**
 * @param {number} num
 * @return {string}
 */
function toHex2(n) {
  if (n === 0) {
    return '0';
  }
  let result = '';
  while (n !== 0) {
    result = hex[n & 15] + result;
    n >>>= 4;
  }
  return result;
}
