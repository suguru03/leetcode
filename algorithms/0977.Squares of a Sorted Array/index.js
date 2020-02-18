'use strict';

module.exports = { sortedSquares };

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
  const nums = A.map(num => num ** 2);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;
  const result = Array(nums.length);
  while (index >= 0) {
    result[index--] = nums[left] > nums[right] ? nums[left++] : nums[right--];
  }
  return result;
}
