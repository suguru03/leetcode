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

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget2(graph) {
  const result = [];
  dfs(0, new Set());
  return result;

  function dfs(current, seen) {
    if (seen.has(current)) {
      return;
    }
    seen.add(current);
    if (current === graph.length - 1) {
      result.push(Array.from(seen));
    }
    for (const next of graph[current]) {
      dfs(next, seen);
    }
    seen.delete(current);
  }
}
