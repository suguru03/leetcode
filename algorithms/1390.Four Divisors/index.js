'use strict';

module.exports = { sumFourDivisors, sumFourDivisors2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumFourDivisors(nums) {
  const max = Math.max(...nums) + 1;
  const countMap = Array.from({ length: max }, () => ({ sum: 1, count: 1 }));
  for (let i = 1; i < max; i++) {
    if (i === 1) {
      continue;
    }
    for (let j = i; j < max; j += i) {
      countMap[j].count++;
      countMap[j].sum += i;
    }
  }
  let result = 0;
  for (const num of nums) {
    const { count, sum } = countMap[num];
    if (count === 4) {
      result += sum;
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumFourDivisors2(nums) {
  let result = 0;
  loop: for (const num of nums) {
    let n = Math.sqrt(num) | 0;
    if (n * n === num) {
      continue;
    }
    n++;
    let sum = 0;
    let count = 0;
    while (--n > 0) {
      if (num % n !== 0) {
        continue;
      }
      if (count === 4) {
        continue loop;
      }
      count += 2;
      sum += n + num / n;
    }
    if (count === 4) {
      result += sum;
    }
  }
  return result;
}
