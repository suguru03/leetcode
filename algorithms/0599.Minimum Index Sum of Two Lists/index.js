'use strict';

module.exports = { findRestaurant };

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
  const scoreMap = new Map();
  for (const [score, restaurant] of list1.entries()) {
    scoreMap.set(restaurant, score);
  }
  let min = Infinity;
  const result = [];
  for (const [score, restaurant] of list2.entries()) {
    if (!scoreMap.has(restaurant)) {
      continue;
    }
    const sum = score + scoreMap.get(restaurant);
    if (sum > min) {
      continue;
    }
    if (sum < min) {
      min = sum;
      result.length = 0;
    }
    result.push(restaurant);
  }
  return result;
}
