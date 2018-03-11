'use strict';

module.exports = { allPathsSourceTarget };

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
  const l = graph.length;
  const result = [];
  dfs(0, []);
  return result;

  function dfs(n, path) {
    path = [...path, n];
    if (n === l - 1) {
      return result.push(path);
    }
    for (const i of graph[n]) {
      dfs(i, path);
    }
  }
}
