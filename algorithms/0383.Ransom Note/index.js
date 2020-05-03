'use strict';

module.exports = { canConstruct };

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const map = new Map();
  for (const c of magazine) {
    map.set(c, ~~map.get(c) + 1);
  }
  for (const c of ransomNote) {
    if (!map.get(c)) {
      return false;
    }
    map.set(c, map.get(c) - 1);
  }
  return true;
}
