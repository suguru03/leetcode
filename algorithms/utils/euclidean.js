'use strict';

/**
 * generate greatest common divisor (GCD)
 */
function euclidean(a, b) {
  if (a === 0 || b === 0) {
    return 1;
  }
  if (a < b) {
    [a, b] = [b, a];
  }
  let r = a % b;
  while (r !== 0) {
    [a, b, r] = [b, r, b % r];
  }
  return b;
}
