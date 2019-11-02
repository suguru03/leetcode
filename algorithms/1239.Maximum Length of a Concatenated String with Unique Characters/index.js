'use strict';

module.exports = { maxLength };

/**
 * @param {string[]} arr
 * @return {number}
 */
function maxLength(arr) {
  const setList = [];
  for (const str of arr) {
    const set = new Set(str);
    if (set.size !== str.length) {
      continue;
    }
    setList.push(set);
  }
  return dfs(0, new Set());

  function dfs(index, cur) {
    let max = cur.size;
    loop: for (let i = index; i < setList.length; i++) {
      const set = setList[i];
      for (const c of cur) {
        if (set.has(c)) {
          continue loop;
        }
      }
      for (const c of set) {
        cur.add(c);
      }
      max = Math.max(max, dfs(i + 1, cur));
      for (const c of set) {
        cur.delete(c);
      }
    }
    return max;
  }
}
