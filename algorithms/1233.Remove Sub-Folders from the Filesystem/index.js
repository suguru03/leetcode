'use strict';

module.exports = { removeSubfolders };

/**
 * @param {string[]} folder
 * @return {string[]}
 */
function removeSubfolders(folder) {
  folder = folder.sort((s1, s2) => s1.localeCompare(s2)).map(s => s.slice(1));
  const set = new Set();
  loop: for (const s of folder) {
    let str = '';
    for (const p of s.split('/')) {
      str = [str, p].join('/');
      if (set.has(str)) {
        continue loop;
      }
    }
    set.add(str);
  }
  return Array.from(set);
}
