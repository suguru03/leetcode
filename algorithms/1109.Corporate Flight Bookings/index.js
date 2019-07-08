'use strict';

module.exports = { corpFlightBookings, corpFlightBookings2 };

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
function corpFlightBookings(bookings, n) {
  const map = {};
  for (const [i, j, k] of bookings) {
    map[i - 1] = ~~map[i - 1] + k;
    map[j] = ~~map[j] - k;
  }
  let cur = 0;
  const result = Array(n);
  for (let i = 0; i < n; i++) {
    cur += ~~map[i];
    result[i] = cur;
  }
  return result;
}

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
function corpFlightBookings2(bookings, n) {
  const result = Array(n).fill(0);
  for (const [i, j, k] of bookings) {
    result[i - 1] += k;
    if (j < n) {
      result[j] -= k;
    }
  }
  for (let i = 1; i < n; i++) {
    result[i] += result[i - 1];
  }
  return result;
}
