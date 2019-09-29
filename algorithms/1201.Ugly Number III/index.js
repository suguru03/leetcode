'use strict';

module.exports = { nthUglyNumber };

function nthUglyNumber(n, a, b, c) {
  let low = 0;
  let high = Math.min(a, b, c) * n + 1;
  const ab = lcm(a, b);
  const bc = lcm(b, c);
  const ca = lcm(c, a);
  const abc = lcm(ab, bc);
  const f = Math.floor;
  while (low < high) {
    const mid = f(high - (high - low) / 2);
    const count = f(mid / a) + f(mid / b) + f(mid / c) - f(mid / ab) - f(mid / bc) - f(mid / ca) + f(mid / abc);
    if (count < n) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

/**
 * Least common multiple
 * @param n1
 * @param n2
 */
function lcm(n1, n2) {
  if (n1 < n2) {
    [n1, n2] = [n2, n1];
  }
  const x = n1 * n2;
  let r = n1 % n2;
  while (r !== 0) {
    [n1, n2, r] = [n2, r, n2 % r];
  }
  return x / n2;
}
