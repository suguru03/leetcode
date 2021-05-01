'use strict';

const assert = require('assert');

const { powerfulIntegers } = require('./');

describe('#powerfulIntegers', () => {
  const tests = [
    {
      x: 2,
      y: 3,
      bound: 10,
      result: [2, 3, 4, 5, 7, 9, 10],
    },
    {
      x: 3,
      y: 5,
      bound: 15,
      result: [2, 4, 6, 8, 10, 14],
    },
  ];

  for (const { x, y, bound, result } of tests) {
    it(`${x}, ${y}, ${bound} -> ${result}`, () => {
      assert.deepStrictEqual(sort(powerfulIntegers(x, y, bound)), sort(result));
    });
  }
  function sort(arr) {
    return arr.sort((n1, n2) => n1 - n2);
  }
});
