'use strict';

module.exports = { generateParenthesis, generateParenthesis2 };

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];
  dfs('', 0);
  return result;
  function dfs(cur, count) {
    if (cur.length === n * 2) {
      result.push(cur);
      return;
    }
    if (count < n) {
      dfs(`${cur}(`, count + 1);
    }
    if (cur.length < count * 2) {
      dfs(`${cur})`, count);
    }
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis2(n) {
  return dfs('', 0);
  function dfs(cur, count) {
    if (cur.length === n * 2) {
      return [cur];
    }
    return [...(count < n ? dfs(`${cur}(`, count + 1) : []), ...(cur.length < count * 2 ? dfs(`${cur})`, count) : [])];
  }
}
