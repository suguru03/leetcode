'use strict';

module.exports = { longestValidParentheses, longestValidParentheses2 };

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  const l = s.length;
  const arr = Array(l).fill(0);
  let index = 0;
  let finished = false;
  while (!finished) {
    finished = true;
    index++;
    let k = -1;
    for (let i = 0; i < l; i++) {
      if (arr[i]) {
        continue;
      }
      if (s[i] === '(') {
        k = i;
        continue;
      }
      if (k === -1) {
        continue;
      }
      arr[k] = index;
      arr[i] = index;
      k = -1;
      finished = false;
    }
  }
  let cur = 0;
  let max = 0;
  for (let i = 0; i <= l; i++) {
    if (arr[i]) {
      cur++;
      continue;
    }
    max = Math.max(max, cur);
    cur = 0;
  }
  return max;
}

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses2(s) {
  const l = s.length;
  const stack = [-1];
  let max = 0;
  for (let i = 0; i < l; i++) {
    const c = s[i];
    if (c === '(') {
      stack.push(i);
      continue;
    }
    stack.pop();
    if (!stack.length) {
      stack.push(i);
    } else {
      max = Math.max(max, i - stack[stack.length - 1]);
    }
  }
  return max;
}
