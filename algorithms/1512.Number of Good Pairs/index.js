'use strict';

module.exports = { numIdenticalPairs };

/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  const counts = Array(101).fill(0);
  let result = 0;
  for (const num of nums) {
    result += counts[num]++;
  }
  return result;
}
