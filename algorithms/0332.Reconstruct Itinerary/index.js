'use strict';

module.exports = { findItinerary };

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
  const map = new Map();
  for (const [from, to] of tickets) {
    map.set(from, map.get(from) || []);
    map.get(from).push(to);
  }
  for (const arr of map.values()) {
    arr.sort();
  }
  const res = dfs('JFK');
  return res;

  function dfs(from) {
    if (!map.has(from)) {
      return [from];
    }
    const destinations = map.get(from);
    const list = [];
    while (destinations.length) {
      list.unshift(...dfs(destinations.shift()));
    }
    return [from, ...list];
  }
}
