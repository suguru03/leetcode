'use strict';

module.exports = { buddyStrings };

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function buddyStrings(A, B) {
  const l = A.length;
  if (l !== B.length) {
    return false;
  }
  const diff = [];
  for (let i = 0; i < l; i++) {
    if (A[i] === B[i]) {
      continue;
    }
    if (diff.push(i) > 2) {
      return false;
    }
  }
  switch (diff.length) {
    case 1:
      return false;
    case 2:
      const [i1, i2] = diff;
      return A[i1] === B[i2] && A[i2] === B[i1];
  }
  return new Set(A).size < l;
}
