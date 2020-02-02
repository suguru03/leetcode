'use strict';

module.exports = { minSetSize };

/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  const countMap = new Map();
  for (const n of arr) {
    countMap.set(n, ~~countMap.get(n) + 1);
  }
  let removed = 0;
  let total = arr.length;
  const counts = Array.from(countMap.values()).sort((c1, c2) => c2 - c1);
  while (total > arr.length / 2) {
    total -= counts[removed++];
  }
  return removed;
}
