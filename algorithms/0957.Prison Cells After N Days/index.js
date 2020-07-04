'use strict';

module.exports = { prisonAfterNDays, prisonAfterNDays2 };

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
      next[j] = Number(cells[j - 1] === cells[j + 1]);
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

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
function prisonAfterNDays2(cells, N) {
  const map = new Map([[cells.toString(), 0]]);
  for (let i = 1; i <= N; i++) {
    const next = Array(cells.length).fill(0);
    for (let j = 1; j < cells.length - 1; j++) {
      next[j] = Number(cells[j - 1] === cells[j + 1]);
    }
    cells = next;
    const key = next.toString();
    if (!map.has(key)) {
      map.set(key, i);
      continue;
    }
    const diff = i - map.get(key);
    i += Math.floor((N - i) / diff) * diff;
  }
  return cells;
}
