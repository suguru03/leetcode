'use strict';

module.exports = { numFriendRequests };

/**
 * @param {number[]} ages
 * @return {number}
 */
function numFriendRequests(ages) {
  const count = {};
  for (const age of ages) {
    count[age] = ++count[age] || 1;
  }
  let result = 0;
  const nums = Object.keys(count).map(Number);
  for (const a of nums) {
    const ca = count[a];
    for (const b of nums) {
      if (b <= 0.5 * a + 7 || b > a || (b > 100 && a < 100)) {
        continue;
      }
      result += a === b ? ca * (ca - 1) : ca * count[b];
    }
  }
  return result;
}
