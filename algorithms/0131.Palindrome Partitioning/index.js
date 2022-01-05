'use strict';

module.exports = { partition };

/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const result = [];
  for (let i = 1; i <= s.length; i++) {
    const str = s.slice(0, i);
    if (!isPalindrome(str)) {
      continue;
    }
    const next = partition(s.slice(i));
    if (next.length === 0) {
      result.push([str]);
    } else {
      result.push(...next.map((list) => [str, ...list]));
    }
  }
  return result;
}

const memo = new Map();

function isPalindrome(str) {
  if (memo.has(str)) {
    return memo.get(str);
  }
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      memo.set(str, false);
      return false;
    }
  }
  memo.set(str, true);
  return true;
}
