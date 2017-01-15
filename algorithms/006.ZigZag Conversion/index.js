'use strict';

module.exports = convert;

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {

  const ha = numRows - 1;
  const a = 2 * ha;
  if (a <= 1) {
    return s;
  }
  let i = -1;
  const l = s.length;
  const result = Array(numRows);
  while (++i < l) {
    const b = i % a;
    const index = b <= ha ? b : a - b;
    result[index] = result[index] || '';
    result[index] += s[i];
  }
  return result.join('');
}

