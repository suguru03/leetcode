'use strict';

module.exports = { convertToBase7, convertToBase72 };

/**
 * @param {number} num
 * @return {string}
 */
function convertToBase7(num) {
  let result = '';
  let n = Math.abs(num);
  do {
    result = (n % 7) + result;
    n = (n / 7) | 0;
  } while (n);
  return num < 0 ? `-${result}` : `${result}`;
}

/**
 * @param {number} num
 * @return {string}
 */
function convertToBase72(num) {
  return num.toString(7);
}
