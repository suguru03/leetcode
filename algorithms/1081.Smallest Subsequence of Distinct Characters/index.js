'use strict';

module.exports = { smallestSubsequence };

/**
 * @param {string} text
 * @return {string}
 */
function smallestSubsequence(text) {
  const l = text.length;
  const counts = Array(l);
  const map = new Map();
  for (let i = l - 1; i >= 0; i--) {
    const c = text.charCodeAt(i);
    const indices = map.get(c) || [];
    indices.push(i);
    map.set(c, indices);
    counts[i] = map.size;
  }
  let i = 0;
  let size = map.size;
  let result = new Set();
  while (size) {
    let min = Infinity;
    let minIndex = -1;
    for (let j = i; j < l; j++) {
      if (result.has(text[j])) {
        continue;
      }
      if (counts[j] < size) {
        break;
      }
      const code = text.charCodeAt(j);
      if (code < min) {
        min = code;
        minIndex = j;
      }
    }
    result.add(text[minIndex]);
    i = minIndex + 1;
    size--;
    for (const index of map.get(min)) {
      if (index < minIndex) {
        continue;
      }
      while (minIndex <= index) {
        counts[minIndex++]--;
      }
    }
  }
  return Array.from(result).join('');
}
