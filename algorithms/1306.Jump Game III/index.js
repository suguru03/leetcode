'use strict';

module.exports = { canReach };

/**
 * @param {number[]} arr
 * @param {number} index
 * @return {boolean}
 */
function canReach(arr, index) {
  if (index < 0 || index >= arr.length) {
    return false;
  }
  const diff = arr[index];
  if (diff === 0) {
    return true;
  }
  if (diff < 0) {
    return false;
  }
  arr[index] = -1;
  return canReach(arr, index - diff) || canReach(arr, index + diff);
}
