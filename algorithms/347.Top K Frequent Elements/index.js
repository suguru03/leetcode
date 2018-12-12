'use strict';

module.exports = { topKFrequent, topKFrequent2 };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const map = {};
  for (const n of nums) {
    map[n] = ++map[n] || 1;
  }
  const elems = Object.entries(map).sort(([, n1], [, n2]) => n2 - n1);
  const ans = Array(k);
  for (let i = 0; i < k; i++) {
    ans[i] = +elems[i][0];
  }
  return ans;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent2(nums, k) {
  const map = new Map();
  for (const n of nums) {
    const prev = map.get(n) || 0;
    map.set(n, prev + 1);
  }
  const countMap = new Map();
  for (const [n, sum] of map.entries()) {
    const nums = countMap.get(sum) || [];
    nums.push(n);
    countMap.set(sum, nums);
  }

  const sums = Array.from(countMap.keys()).sort((n1, n2) => n2 - n1);
  const ans = [];
  for (let i = 0; i < sums.length; i++) {
    ans.push(...countMap.get(sums[i]));
    if (ans.length >= k) {
      break;
    }
  }
  return ans;
}
