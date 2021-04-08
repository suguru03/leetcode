'use strict';

module.exports = { letterCombinations };

const map = {
  2: [97, 99],
  3: [100, 102],
  4: [103, 105],
  5: [106, 108],
  6: [109, 111],
  7: [112, 115],
  8: [116, 118],
  9: [119, 122],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const result = [];
  if (digits.length !== 0) {
    dfs('');
  }
  return result;

  function dfs(str) {
    if (str.length === digits.length) {
      result.push(str);
      return;
    }
    const [from, to] = map[digits[str.length]];
    for (let i = from; i <= to; i++) {
      dfs(str + String.fromCharCode(i));
    }
  }
}
