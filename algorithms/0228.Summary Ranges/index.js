'use strict';

module.exports = { summaryRanges };

/**
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
  let left = 0;
  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    const diff = i - left;
    if (nums[i] - nums[left] === diff) {
      continue;
    }
    result.push(diff === 1 ? `${nums[left]}` : `${nums[left]}->${nums[i - 1]}`);
    left = i;
  }
  return result;
}
