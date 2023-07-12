'use strict';

module.exports = { findSmallestSetOfVertices };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findSmallestSetOfVertices(n, edges) {
  const result = new Set(Array.from({ length: n }, (_, i) => i));
  for (const [, dest] of edges) {
    result.delete(dest);
  }

  return Array.from(result);
}
