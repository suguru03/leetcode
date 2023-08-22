'use strict';

const _ = require('lodash');

module.exports = { minimumSum };

/**
 * @param {number} num
 * @return {number}
 */
function minimumSum(num) {
  const nums = [];
  while (num > 0) {
    const n = num % 10;
    if (n !== 0) {
      nums.push(n);
    }
    num = (num / 10) | 0;
  }
  nums.sort();

  const pairs = [0, 0];
  while (nums.length > 0) {
    const index = nums.length % 2;
    pairs[index] *= 10;
    pairs[index] += nums.shift();
  }

  return _.sum(pairs);
}
