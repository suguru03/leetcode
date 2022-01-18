'use strict';

const assert = require('assert');

const { canPlaceFlowers } = require('./');

describe('#canPlaceFlowers', () => {
  const tests = [
    {
      flowerbed: [1, 0, 0, 0, 1],
      n: 1,
      result: true,
    },
    {
      flowerbed: [1, 0, 0, 0, 1],
      n: 2,
      result: false,
    },
    {
      flowerbed: [1, 0, 0, 0, 0, 1],
      n: 2,
      result: false,
    },
  ];

  for (const { flowerbed, n, result } of tests) {
    it(`${flowerbed}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(canPlaceFlowers(flowerbed, n), result);
    });
  }
});
