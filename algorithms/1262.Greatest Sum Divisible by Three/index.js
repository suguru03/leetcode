'use strict';

module.exports = { maxSumDivThree };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSumDivThree(nums) {
  nums.sort((n1, n2) => n2 - n1);
  let sum = 0;
  let max = 0;
  let odd = 0;
  let even = 0;
  for (const n of nums) {
    sum += n;
    switch (n % 3) {
      case 0:
        max += n;
        continue;
      case 1:
        odd = n;
        break;
      case 2:
        even = n;
        break;
    }
    if (sum % 3 === 0) {
      max = sum;
      continue;
    }
    const oddSum = sum - odd;
    if (oddSum % 3 === 0) {
      max = Math.max(max, oddSum);
    }
    const evenSum = sum - even;
    if (evenSum % 3 === 0) {
      max = Math.max(max, evenSum);
    }
  }
  return max;
}
