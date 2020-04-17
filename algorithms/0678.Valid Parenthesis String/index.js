'use strict';

module.exports = { checkValidString, checkValidString2 };

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  return dfs(0, 0, 0);
  function dfs(index, left, right) {
    if (index === s.length) {
      return left === right;
    }
    if (right > left) {
      return false;
    }
    if (Math.abs(right - left) > s.length - index) {
      return false;
    }
    switch (s[index++]) {
      case '(':
        return dfs(index, left + 1, right);
      case ')':
        return dfs(index, left, right + 1);
      default:
        return dfs(index, left + 1, right) || dfs(index, left, right + 1) || dfs(index, left, right);
    }
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString2(s) {
  const chars = s.split('');
  return check(chars, ['(', ')']) && check(chars.reverse(), [')', '(']);
  function check(chars, [t1, t2]) {
    let count = 0;
    let star = 0;
    for (const c of chars) {
      switch (c) {
        case t1:
          count++;
          break;
        case t2:
          if (count > 0) {
            count--;
            continue;
          }
          if (star > 0) {
            star--;
            continue;
          }
          return false;
        case '*':
          star++;
          break;
      }
    }
    return true;
  }
}
