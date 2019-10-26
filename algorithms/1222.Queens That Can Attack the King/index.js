'use strict';

module.exports = { queensAttacktheKing, queensAttacktheKing2 };

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
function queensAttacktheKing(queens, king) {
  const length = 8;
  const matrix = Array.from({ length }, () => Array(length).fill(false));
  for (const [x, y] of queens) {
    matrix[y][x] = true;
  }
  const [x, y] = king;
  return [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]]
    .map(([dx, dy]) => dfs(x, y, dx, dy))
    .filter(queen => queen);
  function dfs(x, y, dx, dy) {
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      return null;
    }
    if (matrix[y][x]) {
      return [x, y];
    }
    return dfs(x + dx, y + dy, dx, dy);
  }
}

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
function queensAttacktheKing2(queens, king) {
  const map = new Map();
  for (const [x, y] of queens) {
    const set = map.get(y) || new Set();
    map.set(y, set);
    set.add(x);
  }
  const direction = [-1, 0, 1];
  const result = [];
  for (const dx of direction) {
    for (const dy of direction) {
      if (dx === 0 && dy === 0) {
        continue;
      }
      let [x, y] = king;
      for (let i = 0; i < 8; i++) {
        x += dx;
        y += dy;
        if (x < 0 || x >= 8 || y < 0 || y >= 8) {
          break;
        }
        if (map.has(y) && map.get(y).has(x)) {
          result.push([x, y]);
          break;
        }
      }
    }
  }
  return result;
}
