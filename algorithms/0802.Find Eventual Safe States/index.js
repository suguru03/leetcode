'use strict';

module.exports = { eventualSafeNodes };

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  const checked = new Map();
  const result = [];
  for (let i = 0; i < graph.length; i++) {
    if (checkSafe(i)) {
      result.push(i);
    }
  }

  return result;

  function checkSafe(node) {
    if (checked.has(node)) {
      return checked.get(node);
    }

    checked.set(node, false);
    checked.set(node, graph[node].every(checkSafe));
    return checked.get(node);
  }
}
