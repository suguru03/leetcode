'use strict';

module.exports = { checkIfExist };

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
  const set = new Set();
  for (const n of arr) {
    if (set.has(n * 2) || set.has(n / 2)) {
      return true;
    }
    set.add(n);
  }
  return false;
}
