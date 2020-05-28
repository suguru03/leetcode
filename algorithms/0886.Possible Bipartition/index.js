'use strict';

module.exports = { possibleBipartition };

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
function possibleBipartition(N, dislikes) {
  const dislikeMap = new Map();
  for (const [from, to] of dislikes) {
    dislikeMap.set(from, dislikeMap.get(from) || []);
    dislikeMap.set(to, dislikeMap.get(to) || []);
    dislikeMap.get(from).push(to);
    dislikeMap.get(to).push(from);
  }
  const groupMap = new Map();
  return Array.from(dislikeMap.keys()).every(from => dfs(from, groupMap.has(from) ? groupMap.get(from) : 0));

  function dfs(from, group) {
    if (groupMap.has(from)) {
      return groupMap.get(from) === group;
    }
    groupMap.set(from, group);
    return !dislikeMap.has(from) || dislikeMap.get(from).every(to => dfs(to, group ^ 1));
  }
}
