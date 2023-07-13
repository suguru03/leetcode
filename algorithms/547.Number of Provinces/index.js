'use strict';

module.exports = { findCircleNum };

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  const n = isConnected.length;
  let groupCount = 0;
  const seen = new Set();
  for (let i = 0; i < n; i++) {
    if (seen.has(i)) {
      continue;
    }

    ++groupCount;
    mark(i);
  }

  return groupCount;

  function mark(i) {
    if (seen.has(i)) {
      return;
    }

    seen.add(i);
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) {
        mark(j);
      }
    }
  }
}
