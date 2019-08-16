'use strict';

module.exports = { isBipartite };

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  const l = graph.length;
  const g = Array(l);
  for (let i = 0; i < l; i++) {
    const n = (g[i] = g[i] || 1);
    const t = n * -1;
    if (!graph[i].every(n => check(t, n))) {
      return false;
    }
  }
  return true;

  function check(target, i) {
    const n = (g[i] = g[i] || target);
    return n === target;
  }
}
