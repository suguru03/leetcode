'use strict';

module.exports = { carPooling };

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  const nums = Array(1001).fill(0);
  for (const [num, from, to] of trips) {
    nums[from] += num;
    nums[to] -= num;
  }
  return nums.every((num) => {
    capacity -= num;
    return capacity >= 0;
  });
}
