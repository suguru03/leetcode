'use strict';

module.exports = { countBits, countBits2 };

/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
  const arr = Array(num);
  for (let i = 0; i <= num; i++) {
    arr[i] = bitCount(i);
  }
  return arr;
}

function bitCount(x) {
  x = ((x >> 1) & 0x55555555) + (x & 0x55555555);
  x = ((x >> 2) & 0x33333333) + (x & 0x33333333);
  x = ((x >> 4) & 0x0f0f0f0f) + (x & 0x0f0f0f0f);
  x = ((x >> 8) & 0x00ff00ff) + (x & 0x00ff00ff);
  return ((x >> 16) & 0x0000ffff) + (x & 0x0000ffff);
}

/**
 * @param {number} num
 * @return {number[]}
 */
function countBits2(num) {
  const arr = [0];
  let bit = 1;
  let next = 2;
  for (let i = 1; i <= num; i++) {
    if (i < next) {
      arr[i] = 1 + arr[i - bit];
    } else {
      arr[i] = 1;
      bit = next;
      next *= 2;
    }
  }
  return arr;
}
