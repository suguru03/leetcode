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
    find(i, 0, arr);
  }
  return ans;

  function find(index, cur, arr) {
    arr[index] = cur++;
    if (cur === n) {
      ans.push(createResult(arr));
      arr[index] = undefined;
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
        const d1 = cur - arr[j];
        const d2 = Math.abs(j - i);
        if (d1 === d2) {
          continue loop;
        }
      }
      find(i, cur, arr);
    }
    arr[index] = undefined;
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
