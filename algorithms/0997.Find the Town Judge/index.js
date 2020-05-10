'use strict';

module.exports = { findJudge, findJudge2 };

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(N, trust) {
  const spy = new Set();
  const judgeMap = new Map([spy, ...Array.from({ length: N }, () => new Set())].entries());
  for (const [a, b] of trust) {
    judgeMap.set(a, spy);
    judgeMap.get(b).add(a);
  }
  return Array.from(judgeMap.values()).findIndex(set => set !== spy && set.size === N - 1);
}

/**
 * @see https://leetcode.com/problems/find-the-town-judge/discuss/242938/JavaC%2B%2BPython-Directed-Graph
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge2(N, trust) {
  const counts = [Infinity, ...Array(N).fill(0)];
  for (const [a, b] of trust) {
    counts[a]--;
    counts[b]++;
  }
  return counts.findIndex(count => count === N - 1);
}
