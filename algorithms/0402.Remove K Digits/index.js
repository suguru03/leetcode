'use strict';

module.exports = { removeKdigits };

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
  let i = 0;
  let left = '';
  while (k > 0 && i < num.length) {
    const n = num[i];
    let j = left.length - 1;
    if (left.length === 0 || n >= left[j]) {
      i++;
      left += n;
      continue;
    }
    while (k > 0 && left[j] > n) {
      k--;
      j--;
    }
    if (j >= 0) {
      left = left.slice(0, j + 1);
      continue;
    }
    left = '';
    while (num[i] === '0') {
      i++;
    }
  }
  let result = left + num.slice(i);
  if (k > 0) {
    result = result.slice(0, -k);
  }
  return result.length === 0 ? '0' : result;
}
