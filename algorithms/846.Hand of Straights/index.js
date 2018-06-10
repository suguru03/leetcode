'use strict';

module.exports = { isNStraightHand };

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
function isNStraightHand(hand, W) {
  const map = {};
  for (const n of hand) {
    map[n] = ++map[n] || 1;
  }
  const nums = Object.keys(map)
    .map(Number)
    .sort((n1, n2) => n1 - n2);
  let offset = 0;
  const l = nums.length;
  while (offset <= l - W) {
    const num = nums[offset];
    for (let n = num; n < num + W; n++) {
      if (!map[n]) {
        return false;
      }
      if (--map[n] === 0) {
        offset++;
      }
    }
  }
  return offset === l;
}
