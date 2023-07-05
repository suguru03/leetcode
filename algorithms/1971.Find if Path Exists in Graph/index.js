'use strict';

module.exports = { validPath };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  const grid = Array.from({ length: n }, () => []);
  for (const [x, y] of edges) {
    grid[y].push(x);
    grid[x].push(y);
  }

  return isValid(source);

  function isValid(cur) {
    if (cur === destination) {
      return true;
    }
    const next = grid[cur];
    grid[cur] = [];
    return next.some(isValid);
  }
}
