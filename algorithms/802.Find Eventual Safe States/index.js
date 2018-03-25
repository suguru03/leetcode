'use strict';

module.exports = { eventualSafeNodes };

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  const l = graph.length;
  const safe = Array(l);
  const result = [];
  for (let i = 0; i < l; i++) {
    walk(i, {});
  }
  return result.sort((a, b) => a - b);

  function walk(i, map) {
    const s = safe[i];
    if (s !== undefined) {
      return s;
    }
    if (map[i]) {
      return false;
    }
    map[i] = true;
    for (const j of graph[i]) {
      const s = walk(j, map);
      if (!s) {
        return false;
      }
    }
    safe[i] = true;
    result.push(i);
    return true;
  }
}
