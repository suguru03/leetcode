'use strict';

module.exports = { twoSum, twoSum2 };

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [0, 0];
}

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum2(numbers, target) {
  const map = new Map();
  for (const [index, num] of numbers.entries()) {
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff) + 1, index + 1];
    }
    map.set(num, index);
  }
  return [0, 0];
}
