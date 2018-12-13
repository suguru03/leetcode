'use strict';

module.exports = { solveNQueens };

/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const ans = [];
  const arr = Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = 0;
    find(arr, 0);
    arr[i] = undefined;
  }
  return ans;

  function find(arr, row) {
    if (++row === n) {
      ans.push(createResult(arr));
      return;
    }
    loop: for (let i = 0; i < n; i++) {
      if (arr[i] !== undefined) {
        continue;
      }
      for (let j = 0; j < n; j++) {
        if (j === i) {
          continue;
        }
        const d1 = row - arr[j];
        const d2 = Math.abs(j - i);
        if (d1 === d2) {
          continue loop;
        }
      }
      arr[i] = row;
      find(arr, row);
      arr[i] = undefined;
    }
  }
}

function createResult(arr) {
  const n = arr.length;
  const result = Array(n);
  for (let i = 0; i < n; i++) {
    const index = arr[i];
    let str = '';
    for (let j = 0; j < n; j++) {
      str += j === index ? 'Q' : '.';
    }
    result[i] = str;
  }
  return result;
}
