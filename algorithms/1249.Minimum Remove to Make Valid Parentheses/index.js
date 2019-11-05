'use strict';

module.exports = { minRemoveToMakeValid };

/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  const stack = [];
  let result = '';
  for (let c of s) {
    switch (c) {
      case '(':
        stack.push('');
        break;
      case ')':
        if (stack.length === 0) {
          continue;
        }
        c = stack.pop() + c;
        break;
    }
    if (stack.length === 0) {
      result += c;
    } else {
      stack[stack.length - 1] += c;
    }
  }
  for (const str of stack) {
    result += str.slice(1);
  }
  return result;
}
