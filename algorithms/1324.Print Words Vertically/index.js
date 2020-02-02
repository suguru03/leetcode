'use strict';

module.exports = { printVertically, printVertically2 };

/**
 * @param {string} s
 * @return {string[]}
 */
function printVertically(s) {
  const arr = s.split(' ');
  const max = Math.max(...arr.map(str => str.length));
  const res = Array(max);
  for (let i = 0; i < max; i++) {
    let str = '';
    for (let j = 0; j < arr.length; j++) {
      str += arr[j][i] || ' ';
    }
    res[i] = str.trimRight();
  }
  return res;
}

/**
 * @param {string} s
 * @return {string[]}
 */
function printVertically2(s) {
  let max = 0;
  let size = 0;
  let count = 0;
  const result = [];
  for (const c of s) {
    if (c !== ' ') {
      result[size] = result[size] || ' '.repeat(count);
      result[size++] += c;
      continue;
    }
    count++;
    max = Math.max(max, size);
    while (size < max) {
      result[size++] += ' ';
    }
    size = 0;
  }
  return result.map(str => str.trimRight());
}
