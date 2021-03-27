'use strict';

module.exports = { wordSubsets };

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
function wordSubsets(A, B) {
  const cb = B.map(count).reduce((cb1, cb2) => cb1.map((c, i) => Math.max(c, cb2[i])));
  return A.filter((str) => {
    const ca = count(str);
    return cb.every((c, i) => c <= ca[i]);
  });
}

function count(str) {
  const counts = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    counts[str.charCodeAt(i) - 97]++;
  }
  return counts;
}
