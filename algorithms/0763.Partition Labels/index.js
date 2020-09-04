'use strict';

module.exports = { partitionLabels };

/**
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(S) {
  const rights = Array(26);
  for (let i = 0; i < S.length; i++) {
    rights[getIndex(i)] = i;
  }
  const result = [];
  let right = 0;
  let left = -1;
  for (let i = 0; i < S.length; i++) {
    right = Math.max(right, rights[getIndex(i)]);
    if (i !== right) {
      continue;
    }
    result.push(right - left);
    left = i;
  }
  return result;

  function getIndex(index) {
    return S.charCodeAt(index) - 97;
  }
}
