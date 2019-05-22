'use strict';

module.exports = { lastStoneWeight };

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((n1, n2) => n1 - n2);
    const s1 = stones.pop();
    const s2 = stones.pop();
    if (s1 === s2) {
      continue;
    }
    stones.push(Math.abs(s1 - s2));
  }
  return stones[0] || 0;
}
