'use strict';

module.exports = { prisonAfterNDays };

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
function prisonAfterNDays(cells, N) {
  const list = [];
  const cache = new Map();
  for (let i = 0; i < N; i++) {
    let bit = 0;
    const next = Array(8);
    for (let j = 0; j < 8; j++) {
      bit += cells[j] << j;
      next[j] = cells[j - 1] === cells[j + 1] ? 1 : 0;
    }
    if (cache.has(bit)) {
      const d = cache.get(bit);
      const t = i - d;
      const index = ((N - d) % t) + d;
      return list[index];
    }
    cache.set(bit, i);
    list[i] = cells;
    cells = next;
  }
  return cells;
}
