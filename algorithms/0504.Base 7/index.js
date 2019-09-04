'use strict';

module.exports = { convertToBase7, convertToBase72 };

/**
 * @param {number} num
 * @return {string}
 */
function convertToBase7(num) {
  let res = '';
  let n = Math.abs(num);
  do {
    res = (n % 7) + res;
    n = (n / 7) | 0;
  } while (n !== 0);
  return num < 0 ? `-${res}` : res;
}

/**
 * @param {number} num
 * @return {string}
 */
function convertToBase72(num) {
  return num.toString(7);
}
