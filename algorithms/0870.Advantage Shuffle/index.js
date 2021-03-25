'use strict';

module.exports = { advantageCount };

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function advantageCount(A, B) {
  const a = [...A].sort((n1, n2) => n1 - n2);
  const b = [...B].sort((n1, n2) => n1 - n2);
  const map = new Map();
  const rest = [];
  let i = -1;
  for (const n of b) {
    const list = map.get(n) ?? [];
    map.set(n, list);
    while (n >= a[++i]) {
      rest.push(a[i]);
    }
    if (i >= A.length) {
      break;
    }
    list.push(a[i]);
  }
  return B.map((n) => map.get(n)?.shift() ?? rest.shift());
}
