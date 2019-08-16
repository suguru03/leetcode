'use strict';

module.exports = { findRestaurant };

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
  const map = new Map();
  for (const [index, item] of list1.entries()) {
    map.set(item, index);
  }
  let min = Infinity;
  const result = [];
  for (const [index, item] of list2.entries()) {
    if (!map.has(item)) {
      continue;
    }
    const sum = map.get(item) + index;
    if (sum > min) {
      continue;
    }
    if (sum < min) {
      min = sum;
      result.length = 0;
    }
    result.push(item);
  }
  return result;
}
