'use strict';

module.exports = { combinationSum, combinationSum2 };

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const candidateSet = new Set(candidates);
  const result = [];
  dfs(target, []);
  return result;

  function dfs(cur, arr) {
    if (cur < 0) {
      return;
    }
    if (cur === 0) {
      result.push([...arr]);
      return;
    }
    let t = arr[arr.length - 1] || target;
    do {
      if (!candidateSet.has(t)) {
        continue;
      }
      arr.push(t);
      dfs(cur - t, arr);
      arr.length--;
    } while (t--);
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  let curIndex = candidates.length - 1;
  const result = [];
  dfs(curIndex, target, []);
  return result;

  function dfs(index, cur, arr) {
    if (cur < 0) {
      return;
    }
    if (cur === 0) {
      result.push([...arr]);
      return;
    }
    do {
      const candidate = candidates[index];
      arr.push(candidate);
      dfs(index, cur - candidate, arr);
      arr.pop();
    } while (index--);
  }
}
