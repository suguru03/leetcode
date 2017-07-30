'use strict';

module.exports = { minSteps };

/**
 * @param {number} n
 * @return {number}
 */
function minSteps(n) {
  return n <= 1 ? 0 : getTotal(1, 1, 1);

  function getTotal(current, copy, total) {
    if (n < current) {
      return Infinity;
    }
    if (n === current) {
      return total;
    }
    const t1 = getTotal(current + copy, copy, ++total);
    const t2 = getTotal(current * 2, current, ++total);
    return Math.min(t1, t2);
  }
}

