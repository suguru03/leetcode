'use strict';

module.exports = { twoSum };

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const index = i + 1;
    const n = map[target - num];
    if (n !== undefined) {
      return [n, index];
    }
    map[num] = index;
  }
  return [0, 0];
}
