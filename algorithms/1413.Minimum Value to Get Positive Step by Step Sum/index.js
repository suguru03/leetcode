'use strict';

module.exports = { minStartValue };

/**
 * @param {number[]} nums
 * @return {number}
 */
function minStartValue(nums) {
  let cur = 1;
  let result = 1;
  for (const n of nums) {
    cur += n;
    if (cur >= 1) {
      continue;
    }
    result -= cur - 1;
    cur = 1;
  }
  return result;
}
