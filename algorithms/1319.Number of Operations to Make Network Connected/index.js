'use strict';

module.exports = { makeConnected };

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function makeConnected(n, connections) {
  const map = new Map();
  for (const [c1, c2] of connections) {
    const s1 = map.get(c1) || new Set();
    s1.add(c2);
    map.set(c1, s1);
    const s2 = map.get(c2) || new Set();
    s2.add(c1);
    map.set(c2, s2);
  }
  let count = 0;
  let groupNum = 0;
  const groupMap = new Map();
  const groupSet = new Map();
  let depCount = 0;
  const depMap = new Map();
  for (let i = 0; i < n; i++) {
    if (groupMap.has(i)) {
      continue;
    }
    count = -1;
    const set = new Set();
    groupSet.set(++groupNum, set);
    dfs(i, groupNum, set);
    const dep = count / 2 - (set.size - 1);
    depCount += dep;
    depMap.set(groupNum, dep);
  }
  groupNum--;
  if (groupNum <= depCount) {
    return groupNum;
  }
  return -1;

  function dfs(i, group, set) {
    count++;
    if (groupMap.has(i)) {
      return;
    }
    set.add(i);
    groupMap.set(i, group);
    for (const n of map.get(i) || []) {
      dfs(n, group, set);
    }
  }
}
