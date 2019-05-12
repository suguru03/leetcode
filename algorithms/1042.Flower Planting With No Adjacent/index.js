'use strict';

module.exports = { gardenNoAdj, gardenNoAdj2 };

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj(N, paths) {
  const map = {};
  for (let [x, y] of paths) {
    [x, y] = --x < --y ? [y, x] : [x, y];
    map[x] = map[x] || new Set();
    map[x].add(y);
  }
  const answer = Array(N);
  for (let x = 0; x < N; x++) {
    const set = map[x];
    if (!set) {
      answer[x] = 1;
      continue;
    }
    const taken = new Set();
    for (const n of set) {
      taken.add(answer[n]);
    }
    let cur = 0;
    while (++cur <= N) {
      if (!taken.has(cur)) {
        answer[x] = cur;
        break;
      }
    }
  }
  return answer;
}

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj2(N, paths) {
  const map = {};
  for (let [x, y] of paths) {
    x--;
    y--;
    map[x] = map[x] || [];
    map[x].push(y);
    map[y] = map[y] || [];
    map[y].push(x);
  }
  const ans = Array(N);
  for (let x = 0; x < N; x++) {
    const arr = map[x] || [];
    const set = new Set();
    for (const y of arr) {
      ans[y] && set.add(ans[y]);
    }
    for (let i = 1; i <= 4; i++) {
      if (!set.has(i)) {
        ans[x] = i;
        break;
      }
    }
  }
  return ans;
}
