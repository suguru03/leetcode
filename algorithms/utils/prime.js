'use strict';

Object.assign(exports, { getPrimes });

function getPrimes(max) {
  const sieve = Array(max);
  const primes = max < 2 ? [] : [2];
  for (let i = 3; i <= max; i += 2) {
    if (sieve[i]) {
      continue;
    }
    primes.push(i);
    for (let j = i << 1; j <= max; j += i) {
      sieve[j] = true;
    }
  }
  return primes;
}
