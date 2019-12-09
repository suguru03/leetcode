'use strict';

module.exports = { subtractProductAndSum };

/**
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
  let product = 1;
  let sum = 0;
  while (n) {
    const rem = n % 10;
    product *= rem;
    sum += rem;
    n = (n / 10) | 0;
  }
  return product - sum;
}
