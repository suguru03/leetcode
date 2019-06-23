'use strict';

module.exports = { carPooling };

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  const map = {};
  for (const [p, s, e] of trips) {
    map[s] = map[s] || 0;
    map[s] += p;
    map[e] = map[e] || 0;
    map[e] -= p;
  }
  for (let i = 0; i <= 1000; i++) {
    if (!map[i]) {
      continue;
    }
    capacity -= map[i];
    if (capacity < 0) {
      return false;
    }
  }
  return true;
}
