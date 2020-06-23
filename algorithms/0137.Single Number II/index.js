'use strict';

module.exports = { singleNumber };

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, ~~map.get(num) + 1);
  }
  const [result] = Array.from(map).find(([num, count]) => count === 1);
  return result;
}
