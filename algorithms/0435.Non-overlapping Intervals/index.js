'use strict';

module.exports = { eraseOverlapIntervals };

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  intervals.sort(([, e1], [, e2]) => e1 - e2);
  let count = 0;
  let current = -Infinity;
  for (const [start, end] of intervals) {
    if (start < current) {
      count++;
      continue;
    }
    current = end;
  }
  return count;
}
