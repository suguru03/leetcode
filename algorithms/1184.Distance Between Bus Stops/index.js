'use strict';

module.exports = { distanceBetweenBusStops };

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
