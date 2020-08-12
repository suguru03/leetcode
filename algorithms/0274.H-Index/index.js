'use strict';

const _ = require('lodash');

module.exports = { hIndex };

/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  const counts = Array(citations.length + 1).fill(0);
  for (const n of citations) {
    counts[Math.min(n, citations.length)]++;
  }
  let total = 0;
  return Math.max(
    0,
    _.findLastIndex(counts, (count, index) => {
      total += count;
      return total >= index;
    }),
  );
}
