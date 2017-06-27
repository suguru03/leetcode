'use strict';

module.exports = { climbStairs };

const map = {};
const steps = [1, 2];
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  return getPatterns(n);
}

function getPatterns(n) {
  let sum = map[n] || 0;
  if (sum) {
    return sum;
  }
  for (let i = 0; i < steps.length; i++) {
    const rest = n - steps[i];
    if (rest < 0) {
      continue;
    }
    sum += !rest ? 1 : getPatterns(rest);
  }
  map[n] = sum;
  return sum;
}
