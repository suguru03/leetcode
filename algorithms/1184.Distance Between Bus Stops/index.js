'use strict';

module.exports = { distanceBetweenBusStops, distanceBetweenBusStops2 };

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(distance, start, destination) {
  const size = distance.length;
  let left = start;
  let right = start;
  let leftSum = 0;
  let rightSum = 0;
  while (left !== destination || right !== destination) {
    if (left !== destination) {
      left = --left >= 0 ? left : size - 1;
      leftSum += distance[left];
    }
    if (right !== destination) {
      rightSum += distance[right];
      right = ++right % size;
    }
  }
  return Math.min(leftSum, rightSum);
}

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops2(distance, start, destination) {
  if (start > destination) {
    [start, destination] = [destination, start];
  }
  let sum = 0;
  let total = 0;
  for (const [i, d] of distance.entries()) {
    if (i >= start && i < destination) {
      sum += d;
    }
    total += d;
  }
  return Math.min(sum, total - sum);
}
