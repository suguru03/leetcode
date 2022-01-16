'use strict';

module.exports = { maxDistToClosest };

/**
 * @param {number[]} seats
 * @return {number}
 */
function maxDistToClosest(seats) {
  let l = seats.indexOf(1);
  let max = l;
  for (let r = l + 1; r < seats.length; r++) {
    if (seats[r] === 0) {
      continue;
    }
    [max, l] = [Math.max(max, ((r - l) / 2) | 0), r];
  }
  return Math.max(max, seats.length - l - 1);
}
