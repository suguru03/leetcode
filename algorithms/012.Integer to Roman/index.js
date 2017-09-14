'use strict';

module.exports = { intToRoman };

const hash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
const keys = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let result = '';
  let ik = 0;
  while (num > 0) {
    const key = keys[ik];
    const val = hash[keys[ik]];
    if (num >= val) {
      result += key;
      num -= val;
      continue;
    }
    let prefixKey;
    if (ik % 2 === 0 && num + val / 10 >= val)  {
      prefixKey = keys[ik + 2];
    } else if (ik % 2 === 1 && num + val / 5 >= val)  {
      prefixKey = keys[ik + 1];
    }
    if (prefixKey) {
      result += prefixKey + key;
      num -= val - hash[prefixKey];
    }
    ++ik;
  }
  return result;
}
