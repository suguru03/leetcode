'use strict';

module.exports = { minFallingPathSum };

class Min {
  constructor(num, index) {
    this.num = num;
    this.index = index;
  }
}

/**
 * @param {number[][]} arr
 * @return {number}
 */
function minFallingPathSum(arr) {
  let m1 = new Min(0, -1);
  let m2 = m1;
  for (const row of arr) {
    [m1, m2] = row
      .map((n, i) => (m1.index === i ? n + m2.num : n + m1.num))
      .map((num, index) => new Min(num, index))
      .sort((m1, m2) => m1.num - m2.num);
  }
  return m1.num;
}
