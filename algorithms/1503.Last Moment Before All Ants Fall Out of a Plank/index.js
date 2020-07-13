'use strict';

module.exports = { getLastMoment };

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
function getLastMoment(n, left, right) {
  return Math.max(Math.max(...left), n - Math.min(...right));
}
