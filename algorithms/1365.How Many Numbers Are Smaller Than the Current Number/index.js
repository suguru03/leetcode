'use strict';

module.exports = { smallerNumbersThanCurrent, smallerNumbersThanCurrent2, smallerNumbersThanCurrent3 };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
  return nums.map(num => map.get(num));
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent2(nums) {
  const counts = new Array(101).fill(0);
  for (const num of nums) {
    counts[num]++;
  }
  let total = 0;
  for (const [num, count] of counts.entries()) {
    [counts[num], total] = [total, total + count];
  }
  return nums.map(num => counts[num]);
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent3(nums) {
  const counts = [];
  for (const num of nums) {
    counts[num] = ~~counts[num] + 1;
  }
  let total = 0;
  counts.forEach((count, num) => ([counts[num], total] = [total, total + count]));
  return nums.map(num => counts[num]);
}
