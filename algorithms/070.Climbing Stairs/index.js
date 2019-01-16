'use strict';

module.exports = { climbStairs, climbStairs2 };

const map = {};
const steps = [1, 2];
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let sum = map[n] || 0;
  if (sum) {
    return sum;
  }
  for (let i = 0; i < steps.length; i++) {
    const rest = n - steps[i];
    if (rest < 0) {
      continue;
    }
    sum += !rest ? 1 : climbStairs(rest);
  }
  map[n] = sum;
  return sum;
}

function climbStairs2(n) {
  const steps = [0, 1, 2];
  steps.length = n + 1;
  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
}
