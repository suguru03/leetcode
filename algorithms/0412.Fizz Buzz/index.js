'use strict';

module.exports = { fizzBuzz, fizzBuzz2 };

/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  const result = Array(n);
  for (let i = 0; i < n; i++) {
    const n = i + 1;
    if (n % 15 === 0) {
      result[i] = 'FizzBuzz';
    } else if (n % 5 === 0) {
      result[i] = 'Buzz';
    } else if (n % 3 === 0) {
      result[i] = 'Fizz';
    } else {
      result[i] = `${n}`;
    }
  }
  return result;
}

/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz2(n) {
  return Array.from(
    { length: n },
    (_, i) => `${++i % 3 === 0 ? 'Fizz' : ''}${i % 5 === 0 ? 'Buzz' : ''}` || i.toString(),
  );
}
