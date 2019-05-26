'use strict';

module.exports = { maxSatisfied };

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
function maxSatisfied(customers, grumpy, X) {
  let sum = 0;
  let max = 0;
  let cur = 0;
  for (const [i, c] of customers.entries()) {
    const g = grumpy[i];
    if (g) {
      cur += c;
    } else {
      sum += c;
    }
    const j = i - X;
    if (grumpy[j]) {
      cur -= customers[j];
    }
    max = Math.max(max, cur);
  }
  return sum + max;
}
