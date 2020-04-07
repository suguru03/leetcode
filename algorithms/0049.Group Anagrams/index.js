'use strict';

module.exports = { groupAnagrams };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const groupMap = new Map();
  for (const str of strs) {
    const counts = Array(26).fill(0);
    for (const c of str) {
      counts[c.charCodeAt() - 97]++;
    }
    const code = counts.join();
    const group = groupMap.get(code) || [];
    groupMap.set(code, group);
    group.push(str);
  }
  return Array.from(groupMap.values());
}
