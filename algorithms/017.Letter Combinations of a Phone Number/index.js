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
  const l = digits.length;
  if (l === 0) {
    return [];
  }
  const result = new Set();
  dfs(0, '');
  return Array.from(result);

  function dfs(index, str) {
    if (str.length === l) {
      result.add(str);
      return;
    }
    for (let i = index; i < l; i++) {
      const n = +digits[i];
      if (!map[n]) {
        continue;
      }
      const [start, end] = map[n];
      for (let j = start; j <= end; j++) {
        const c = String.fromCharCode(j);
        dfs(i + 1, str + c);
      }
    }
  }
}
