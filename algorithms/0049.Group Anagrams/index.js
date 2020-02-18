'use strict';

module.exports = { groupAnagrams };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const sorted = str
      .split('')
      .sort((c1, c2) => c1.localeCompare(c2))
      .join('');
    const list = map.get(sorted) || [];
    list.push(str);
    map.set(sorted, list);
  }
  return Array.from(map.values());
}
