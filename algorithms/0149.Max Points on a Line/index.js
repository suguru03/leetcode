'use strict';

module.exports = { maxPoints };

/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(points) {
  if (points.length <= 2) {
    return points.length;
  }
  const map = new Map();
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const key = getKey(points[i], points[j]);
      map.set(key, map.get(key) || new Set());
      map.get(key).add(i);
      map.get(key).add(j);
    }
  }
  return Math.max(0, ...Array.from(map.values(), set => set.size));

  function getKey([x1, y1], [x2, y2]) {
    if (x1 === x2) {
      return `x:${x1}`;
    }
    if (y1 === y2) {
      return `y:${y1}`;
    }
    let numerator = y2 - y1;
    let denominator = x2 - x1;
    const gcd = euclidean(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;
    const b = y1 - (numerator * x1) / denominator;
    return `${numerator}/${denominator}:${b}`;
  }

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
}
