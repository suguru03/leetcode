'use strict';

module.exports = { findRestaurant };

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
  const map = {};
  list1.forEach((shop, index) => (map[shop] = index));

  let min = Infinity;
  const result = [];
  for (let i = 0; i < list2.length; i++) {
    if (i > min) {
      break;
    }
    const shop = list2[i];
    const j = map[shop];
    if (j === undefined) {
      continue;
    }
    const sum = i + j;
    if (sum > min) {
      continue;
    }
    if (sum < min) {
      min = sum;
      result.length = 0;
    }
    result.push(shop);
  }
  return result;
}
