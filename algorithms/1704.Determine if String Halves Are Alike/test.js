'use strict';

const assert = require('assert');

const { halvesAreAlike } = require('./');

describe('#halvesAreAlike', () => {
  const tests = [
    {
      s: 'book',
      result: true,
    },
    {
      s: 'textbook',
      result: false,
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(halvesAreAlike(s), result);
    });
  }
});
