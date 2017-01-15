'use strict';

module.exports = { isValid };

const hash = {
  ')': '(',
  '}': '{',
  ']': '['
};
const reg = new RegExp(/(\(|\{|\[)/);

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const list = [];
  let l = s.length;
  while (l--) {
    const c = s[l];
    const pair = hash[c];
    if (pair) {
      list.push(pair);
      continue;
    }
    if (!reg.test(c)) {
      continue;
    }
    const p = list.pop();
    if (p !== c) {
      return false;
    }
  }
  return !list.length;
}
