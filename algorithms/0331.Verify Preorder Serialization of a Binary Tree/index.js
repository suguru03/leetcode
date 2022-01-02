'use strict';

module.exports = { isValidSerialization };

/**
 * @param {string} preorder
 * @return {boolean}
 */
function isValidSerialization(preorder) {
  const list = preorder.split(',');
  return dfs() && list.length === 0;

  function dfs() {
    if (list.length === 0) {
      return false;
    }
    return list.shift() === '#' || (dfs() && dfs());
  }
}
