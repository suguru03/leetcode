'use strict';

module.exports = { validateBinaryTreeNodes };

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
function validateBinaryTreeNodes(n, leftChild, rightChild) {
  const parents = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const left = leftChild[i];
    const right = rightChild[i];
    if (left !== -1 && ++parents[left] > 1) {
      return false;
    }
    if (right !== -1 && ++parents[right] > 1) {
      return false;
    }
  }
  return parents.filter(count => count === 0).length === 1;
}
