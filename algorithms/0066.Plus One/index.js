'use strict';

module.exports = { plusOne, plusOne2 };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let l = digits.length;
  let prev = 1;
  const result = Array(l);
  while (l--) {
    const sum = digits[l] + prev;
    result[l] = sum % 10;
    prev = (sum / 10) | 0;
  }
  if (prev) {
    result.unshift(prev);
  }
  return result;
}

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne2(digits) {
  let l = digits.length;
  let prev = 1;
  while (--l >= 0 && prev === 1) {
    const sum = digits[l] + prev;
    digits[l] = sum % 10;
    prev = (sum / 10) | 0;
  }
  if (prev) {
    digits.unshift(prev);
  }
  return digits;
}
