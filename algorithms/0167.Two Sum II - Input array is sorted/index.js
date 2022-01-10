'use strict';

module.exports = { twoSum, twoSum2, twoSum3 };

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

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum3(numbers, target) {
  const size = numbers.length;
  for (let i = 0; i < size - 1; i++) {
    const t = target - numbers[i];
    let l = i + 1;
    let r = size;
    while (l < r) {
      const m = (l + (r - l) / 2) | 0;
      const n2 = numbers[m];
      if (n2 === t) {
        return [i + 1, m + 1];
      }
      if (n2 < t) {
        l = m + 1;
      } else {
        r = m;
      }
    }
  }
  return [0, 0];
}
