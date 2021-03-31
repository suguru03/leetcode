'use strict';

module.exports = { maxEnvelopes };

class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
function maxEnvelopes(envelopes) {
  const list = envelopes.map(([x, y]) => new Coordinate(x, y)).sort((c1, c2) => c1.x - c2.x || c1.y - c2.y);
  const dp = Array(list.length).fill(0);
  for (let i = 0; i < list.length; i++) {
    dp[i] = 1;
    const e1 = list[i];
    for (let j = 0; j < i; j++) {
      const e2 = list[j];
      if (e1.x > e2.x && e1.y > e2.y) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}
