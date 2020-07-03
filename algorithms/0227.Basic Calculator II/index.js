'use strict';

module.exports = { calculate };

/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  s += '+';
  let sign = '+';
  let num = 0;
  const stack = [];
  for (const c of s) {
    if (/\d/.test(c)) {
      num = num * 10 + Number(c);
      continue;
    }
    if (c === ' ') {
      continue;
    }
    switch (sign) {
      case '+': {
        stack.push(+num);
        break;
      }
      case '-': {
        stack.push(-num);
        break;
      }
      case '*': {
        stack.push(stack.pop() * +num);
        break;
      }
      case '/': {
        stack.push(Math.trunc(stack.pop() / +num));
        break;
      }
    }
    sign = c;
    num = 0;
  }
  return stack.reduce((sum, num) => sum + num, 0);
}
