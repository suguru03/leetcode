'use strict';

module.exports = { topKFrequent };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, ~~countMap.get(num) + 1);
  }
  const counts = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of countMap) {
    counts[count].push(num);
  }
  const result = [];
  for (let count = nums.length; count > 0; count--) {
    if (counts[count].length === 0) {
      continue;
    }
    if (result.push(...counts[count]) >= k) {
      break;
    }
  }
  return result.slice(0, k);
}
