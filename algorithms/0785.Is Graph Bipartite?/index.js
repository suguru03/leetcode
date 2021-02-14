'use strict';

module.exports = { isBipartite };

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  const group = Array(graph.length);
  const stack = Array.from(graph, (_, i) => i);
  while (stack.length) {
    const i = stack.pop();
    if (!group[i]) {
      group[i] = 1;
    }
    for (const j of graph[i]) {
      if (!group[j]) {
        group[j] = -group[i];
        stack.push(j);
      }
      if (group[j] === group[i]) {
        return false;
      }
    }
  }
  return true;
}
