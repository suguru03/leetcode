'use strict';

module.exports = { canFinish };

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const deps = Array.from({ length: numCourses }, () => []);
  for (const [c1, c2] of prerequisites) {
    deps[c1].push(c2);
  }
  const taken = new Map();
  return Array.from(deps.keys()).every(dfs);

  function dfs(c) {
    if (taken.has(c)) {
      return taken.get(c);
    }
    taken.set(c, false);
    if (!deps[c].every(dfs)) {
      return false;
    }
    taken.set(c, true);
    return true;
  }
}
