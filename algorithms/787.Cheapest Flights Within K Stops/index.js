'use strict';

module.exports = { findCheapestPrice, findCheapestPrice2 };

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, K) {
  const map = [];
  for (const [s, d, p] of flights) {
    map[s] = map[s] || [];
    map[s].push({ d, p });
  }
  let min = Infinity;
  find(src, 0, Array(flights.length), 0);
  return min === Infinity ? -1 : min;

  function find(s, price, mark, step) {
    if (s === dst) {
      min = Math.min(min, price);
      return;
    }
    const list = map[s];
    if (step > K || price > min || !list || mark[s]) {
      return;
    }
    mark[s] = true;
    step++;
    for (const { d, p } of list) {
      find(d, price + p, mark, step);
    }
    mark[s] = false;
  }
}

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
function findCheapestPrice2(n, flights, src, dst, K) {
  let prev;
  let cur = Array(n).fill(Infinity);
  cur[src] = 0;
  do {
    [cur, prev] = [[...cur], cur];
    for (const [s, e, c] of flights) {
      cur[e] = Math.min(cur[e], prev[s] + c);
    }
  } while (K--);
  const cost = cur[dst];
  return cost === Infinity ? -1 : cost;
}
