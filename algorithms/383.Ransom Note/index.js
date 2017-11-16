'use strict';

module.exports = { canConstruct };

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const map = {};
  let lm = magazine.length;
  while (lm--) {
    const c = magazine.charAt(lm);
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
    }
  }
  let lr = ransomNote.length;
  while (lr--) {
    const c = ransomNote.charAt(lr);
    if (!map[c]--) {
      return false;
    }
  }
  return true;
}
