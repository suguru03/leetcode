'use strict';

module.exports = { sortArrayByParity };

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParity(A) {
  let ie = 0;
  let io = A.length - 1;
  while (ie < io) {
    const n1 = A[ie];
    if (n1 % 2 === 0) {
      ie++;
    } else {
      [A[ie], A[io]] = [A[io], n1];
      io--;
    }
  }
  return A;
}
