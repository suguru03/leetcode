'use strict';

const assert = require('assert');

const { findClosestElements } = require('./');

describe('#findClosestElements', () => {
  const tests = [
    {
      arr: [1, 2, 3, 4, 5],
      k: 4,
      x: 3,
      result: [1, 2, 3, 4],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 4,
      x: -1,
      result: [1, 2, 3, 4],
    },
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      k: 4,
      x: 6,
      result: [4, 5, 6, 7],
    },
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      k: 10,
      x: 1,
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 4,
      x: 5,
      result: [2, 3, 4, 5],
    },
    {
      arr: [0, 1, 1, 1, 2, 3, 6, 7, 8, 9],
      k: 9,
      x: 4,
      result: [0, 1, 1, 1, 2, 3, 6, 7, 8],
    },
    {
      arr: [0, 0, 0, 1, 3, 5, 6, 7, 8, 8],
      k: 2,
      x: 2,
      result: [1, 3],
    },
    {
      arr: [0, 0, 1, 2, 3, 3, 4, 7, 7, 8],
      k: 3,
      x: 5,
      result: [3, 3, 4],
    },
    {
      arr: [1, 1, 2, 3, 3, 3, 4, 6, 8, 8],
      k: 6,
      x: 1,
      result: [1, 1, 2, 3, 3, 3],
    },
  ];

  for (const { arr, k, x, result } of tests) {
    it(`[${arr}], k: ${k}, x: ${x} -> [${result}]`, () => {
      assert.deepEqual(findClosestElements(arr, k, x), result);
    });
  }
});
