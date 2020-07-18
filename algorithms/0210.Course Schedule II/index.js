'use strict';

module.exports = { findOrder };

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const depMap = new Map();
  const depCountMap = new Map();
  for (const [course, dep] of prerequisites) {
    depCountMap.set(course, ~~depCountMap.get(course) + 1);
    depMap.set(dep, depMap.get(dep) || []);
    depMap.get(dep).push(course);
  }

  const queue = [];
  for (let c = 0; c < numCourses; c++) {
    if (!depCountMap.has(c)) {
      queue.push(c);
    }
  }
  const result = [];
  while (queue.length) {
    const course = queue.pop();
    result.push(course);
    if (!depMap.has(course)) {
      continue;
    }
    for (const dep of depMap.get(course)) {
      depCountMap.set(dep, depCountMap.get(dep) - 1);
      if (depCountMap.get(dep) === 0) {
        queue.push(dep);
      }
    }
  }
  return result.length === numCourses ? result : [];
}
