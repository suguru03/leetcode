'use strict';

module.exports = { mostCompetitive };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function mostCompetitive(nums, k) {
  const result = [];
  for (const [index, num] of nums.entries()) {
    while (num < peek() && nums.length - index + result.length > k) {
      result.pop();
    }
    if (result.length < k) {
      result.push(num);
    }
  }
  return result;

  function peek() {
    return result[result.length - 1] ?? -Infinity;
  }
}
