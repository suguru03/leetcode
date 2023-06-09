'use strict';

module.exports = { groupAnagrams, groupAnagrams2 };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const group = new Map();
  for (const str of strs) {
    const chars = Array(26).fill(0);
    for (const c of str) {
      chars[c.charCodeAt(0) - 97]++;
    }
    const key = chars.join(',');
    group.set(key, group.get(key) ?? []);
    group.get(key).push(str);
  }

  return Array.from(group.values());
}

const primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  107,
];

/**
 * @see https://leetcode.com/problems/group-anagrams/solutions/19233/o-m-n-algorithm-using-hash-without-sort/
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams2(strs) {
  const group = new Map();
  for (const str of strs) {
    let key = 1;
    for (const c of str) {
      key *= primes[c.charCodeAt(0) - 97];
    }
    group.set(key, group.get(key) ?? []);
    group.get(key).push(str);
  }

  return Array.from(group.values());
}
