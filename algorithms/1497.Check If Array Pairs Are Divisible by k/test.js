'use strict';

const assert = require('assert');

const { canArrange } = require('./');

describe('#canArrange', () => {
  const tests = [
    {
      arr: [1, 2, 3, 4, 5, 10, 6, 7, 8, 9],
      k: 5,
      result: true,
    },
    {
      arr: [1, 2, 3, 4, 5, 6],
      k: 7,
      result: true,
    },
    {
      arr: [1, 2, 3, 4, 5, 6],
      k: 10,
      result: false,
    },
    {
      arr: [-4, -7, 5, 2, 9, 1, 10, 4, -8, -3],
      k: 3,
      result: true,
    },
    // -4, 10
    // -7, 1
    // 5, 4
    // 2, -8
    // 9, -3
  ];

  for (const { arr, k, result } of tests) {
    it(`${arr}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(canArrange(arr, k), result);
    });
  }
});
