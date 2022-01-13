'use strict';

module.exports = { findMinArrowShots };

/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  points.sort(([s1], [s2]) => s1 - s2);
  let count = 0;
  let end = -Infinity;
  for (const [s, e] of points) {
    if (s > end) {
      count++;
      end = e;
      continue;
    }
    end = Math.min(end, e);
  }
  return count;
}

/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  points.sort(([, e1], [, e2]) => e1 - e2);
  let count = 0;
  let start = -Infinity;
  for (const [s, e] of points) {
    if (s <= start) {
      continue;
    }
    count++;
    start = e;
  }
  return count;
}
