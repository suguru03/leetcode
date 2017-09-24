'use strict';

module.exports = { calPoints };

/**
 * @param {string[]} ops
 * @return {number}
 */
function calPoints(ops) {
  let result = 0;
  const valid = [];
  for (let i = 0; i < ops.length; i++) {
    let n = ops[i];
    switch (n) {
    case 'D':
      n = (valid[0] || 0) * 2;
      valid.unshift(n);
      break;
    case 'C':
      n = -valid.shift();
      break;
    case '+':
      n = (valid[0] || 0) + (valid[1] || 0);
      valid.unshift(n);
      break;
    default:
      n = +n;
      valid.unshift(n);
      break;
    }
    result += n;
  }
  return result;
}
