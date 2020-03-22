'use strict';

module.exports = { maxNumberOfFamilies, maxNumberOfFamilies2 };

/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
function maxNumberOfFamilies(n, reservedSeats) {
  reservedSeats.sort(([r1, c1], [r2, c2]) => r1 - r2 || c1 - c2).push([n, 10]);
  let row = 1;
  let left = 1;
  let result = 0;
  for (const [r, c] of reservedSeats) {
    if (r !== row) {
      result += (r - row - 1) * 2 + count(left, 10);
      row = r;
      left = 1;
    }
    result += count(left, c);
    left = c;
  }
  return result;

  function count(left, right) {
    left = left === 2 ? 3 : left;
    right = right === 9 ? 8 : right;
    return ((right - left - 1) / 4) | 0;
  }
}

/**
 * bitmask
 * ... it won't work because of memory issue
 * @see https://leetcode.com/problems/cinema-seat-allocation/discuss/548251/Python3-Easy-Python-using-bitmask-(Detailed-Solution)
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
function maxNumberOfFamilies2(n, reservedSeats) {
  const seats = Array(n).fill(0);
  for (const [r, c] of reservedSeats) {
    seats[r - 1] |= 1 << (c - 1);
  }
  const patterns = ['0000011110', '0001111000', '0111100000'].map(bit => parseInt(bit, 2));
  let result = 0;
  for (const row of seats) {
    const [p1, p2, p3] = patterns.map(bit => (~row & bit) === bit);
    result += p1 && p3 ? 2 : p1 || p2 || p3 ? 1 : 0;
  }
  return result;
}
