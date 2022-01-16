'use strict';

module.exports = { maxDistToClosest };

/**
 * @param {number[]} seats
 * @return {number}
 */
function maxDistToClosest(seats) {
  let left = seats.indexOf(1);
  let max = left;
  for (let i = left + 1; i < seats.length; i++) {
    if (seats[i] === 0) {
      continue;
    }
    [max, left] = [Math.max(max, ((i - left) / 2) | 0), i];
  }
  return Math.max(max, seats.length - left - 1);
}
