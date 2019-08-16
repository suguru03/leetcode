'use strict';

module.exports = {
  largestTimeFromDigits,
  largestTimeFromDigits2,
  largestTimeFromDigits3,
};

/**
 * @param {number[]} A
 * @return {string}
 */
function largestTimeFromDigits(A) {
  let max = -1;
  A.forEach((a, i) => {
    if (a > 2) {
      return;
    }
    A.forEach((b, j) => {
      let h = 10 * a + b;
      if (i === j || h >= 24) {
        return;
      }
      A.forEach((c, k) => {
        const l = 6 - i - j - k;
        const m = 10 * c + A[l];
        if (i === k || j === k || m >= 60) {
          return;
        }
        max = Math.max(max, h * 60 + m);
      });
    });
  });
  if (max < 0) {
    return '';
  }
  const [h, m] = [(max / 60) | 0, max % 60].map(n => n.toString().padStart(2, 0));
  return `${h}:${m}`;
}

/**
 * @param {number[]} A
 * @return {string}
 */
function largestTimeFromDigits2(A) {
  const arr = Array(10).fill(0);
  A.forEach(n => arr[n]++);
  let h = 24;
  while (--h >= 0) {
    const s1 = `${h}`.padStart(2, 0);
    const a1 = s1.split('');
    a1.forEach(n => arr[n]--);
    if (a1.every(n => arr[n] >= 0)) {
      let m = 60;
      while (--m >= 0) {
        const s2 = `${m}`.padStart(2, 0);
        const a2 = s2.split('');
        a2.forEach(n => arr[n]--);
        if (a2.every(n => arr[n] >= 0)) {
          return `${s1}:${s2}`;
        }
        a2.forEach(n => arr[n]++);
      }
    }
    a1.forEach(n => arr[n]++);
  }
  return '';
}

/**
 * @param {number[]} A
 * @return {string}
 */
function largestTimeFromDigits3(A) {
  const arr = Array(10).fill(0);
  A.forEach(n => arr[n]++);
  return run(24);

  function run(t, s0) {
    while (--t >= 0) {
      const s1 = `${t}`.padStart(2, 0);
      const a1 = s1.split('');
      a1.forEach(n => arr[n]--);
      if (a1.every(n => arr[n] >= 0)) {
        const s2 = s0 ? `${s0}:${s1}` : run(60, s1);
        if (s2) {
          return s2;
        }
      }
      a1.forEach(n => arr[n]++);
    }
    return '';
  }
}
