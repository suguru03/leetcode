'use strict';

module.exports = { addStrings };

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
  let prev = 0;
  let result = '';
  let l1 = num1.length;
  let l2 = num2.length;
  const l = Math.max(l1, l2);
  for (let i = 0; i < l; i++) {
    const n1 = --l1 < 0 ? 0 : num1[l1];
    const n2 = --l2 < 0 ? 0 : num2[l2];
    const n = prev + +n1 + +n2;
    result = (n % 10) + result;
    prev = (n / 10) | 0;
  }
  return prev ? prev + result : result;
}
