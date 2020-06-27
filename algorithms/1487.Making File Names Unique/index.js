'use strict';

module.exports = { getFolderNames };

/**
 * @param {string[]} names
 * @return {string[]}
 */
function getFolderNames(names) {
  const map = {};
  const result = [];
  for (const name of names) {
    if (!map[name]) {
      map[name] = 1;
      result.push(name);
      continue;
    }
    let next;
    do {
      next = `${name}(${map[name]++})`;
    } while (map[next]);
    map[next] = 1;
    result.push(next);
  }
  return result;
}
