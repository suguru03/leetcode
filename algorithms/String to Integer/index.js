'use strict';

module.exports = myAtoi;

const exp = /^(\-|\+)?[0-9]+/;
const MAX = 2147483647;
const MIN = -2147483648;

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const result = exp.exec(str.trim());
  if (!result) {
    return 0;
  }
  const num = +result[0];
  if (num > MAX) {
    return MAX;
  }
  if (num < MIN) {
    return MIN;
  }
  return num;
}
