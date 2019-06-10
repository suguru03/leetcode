'use strict';

module.exports = { numTilePossibilities, numTilePossibilities2 };

/**
 * @param {string} tiles
 * @return {number}
 */
function numTilePossibilities(tiles) {
  const set = new Set();
  const l = tiles.length;
  const list = tiles.split('');
  const arr = Array(l);
  dfs('');
  return set.size - 1;

  function dfs(s) {
    set.add(s);
    for (const [i, t] of list.entries()) {
      if (arr[i]) {
        continue;
      }
      arr[i] = true;
      dfs(s + t);
      arr[i] = false;
    }
  }
}

/**
 * @see https://leetcode.com/contest/weekly-contest-140/ranking/2/ from uwi-san
 * @param {string} tiles
 * @return {number}
 */
function numTilePossibilities2(tiles) {
  const set = new Set();
  const list = tiles.split('');
  dfs(0, '');
  return set.size - 1;

  function dfs(ptn, s) {
    set.add(s);
    for (const [i, t] of list.entries()) {
      if (ptn << ~i >= 0) {
        dfs(ptn | (1 << i), s + t);
      }
    }
  }
}
