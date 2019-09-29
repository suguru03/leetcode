'use strict';

module.exports = { smallestStringWithSwaps };

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
function smallestStringWithSwaps(s, pairs) {
  if (pairs.length === 0) {
    return s;
  }
  // mapping
  const map = new Map();
  function set(n1, n2) {
    const arr = map.get(n1) || [];
    map.set(n1, arr);
    arr.push(n2);
  }
  for (const [n1, n2] of pairs) {
    set(n1, n2);
    set(n2, n1);
  }

  // grouping
  let groupNum = 0;
  const groups = Array(s.length);
  function fill(n1) {
    const arr = map.get(n1);
    if (!arr) {
      return;
    }
    map.delete(n1);
    groups[n1] = groups[n1] || ++groupNum;
    for (const n2 of arr) {
      groups[n2] = groups[n1];
      fill(n2);
    }
  }
  for (const n of map.keys()) {
    fill(n);
  }

  const indicesList = [];
  for (const [index, i] of groups.entries()) {
    if (!i) {
      continue;
    }
    indicesList[i - 1] = indicesList[i - 1] || [];
    indicesList[i - 1].push(index);
  }

  const str = s.split('');
  for (const indices of indicesList) {
    const list = indices.map(i => s[i]).sort((c1, c2) => c1.localeCompare(c2));
    for (const [i, index] of indices.entries()) {
      str[index] = list[i];
    }
  }
  return str.join('');
}
