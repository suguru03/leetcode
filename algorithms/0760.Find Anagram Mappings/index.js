'use strict';

module.exports = { anagramMappings };

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function anagramMappings(A, B) {
  const l = A.length;
  const map = {};
  const result = Array(l);
  for (let i = 0; i < l; i++) {
    const n = B[i];
    map[n] = map[n] || [];
    map[n].push(i);
  }
  for (let i = 0; i < l; i++) {
    const n = A[i];
    const arr = map[n];
    result[i] = arr.shift();
  }
  return result;
}
