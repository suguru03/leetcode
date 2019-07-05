'use strict';

module.exports = { numMagicSquaresInside };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function numMagicSquaresInside(grid) {
  let count = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      const n1 = grid[i - 1][j - 1];
      const n2 = grid[i - 1][j];
      const n3 = grid[i - 1][j + 1];
      const n4 = grid[i][j - 1];
      const n5 = grid[i][j];
      const n6 = grid[i][j + 1];
      const n7 = grid[i + 1][j - 1];
      const n8 = grid[i + 1][j];
      const n9 = grid[i + 1][j + 1];
      const list = [
        [n1, n2, n3],
        [n1, n5, n9],
        [n1, n4, n7],
        [n2, n5, n8],
        [n3, n5, n7],
        [n3, n6, n9],
        [n4, n5, n6],
        [n7, n8, n9],
      ];
      if (list.every(check)) {
        count++;
      }
    }
  }
  return count;
}

function check(arr) {
  if (arr.some(n => n < 1 || n > 9)) {
    return false;
  }
  const [n1, n2, n3] = arr;
  return n1 !== n2 && n2 !== n3 && n1 + n2 + n3 === 15;
}
