'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minFlips } = require('./');

describe('#minFlips', () => {
  const tests = [
    {
      a: 2,
      b: 6,
      c: 5,
      result: 3,
    },
    {
      a: 4,
      b: 2,
      c: 7,
      result: 1,
    },
    {
      a: 8,
      b: 3,
      c: 5,
      result: 3,
    },
  ];

  _.forEach(tests, ({ a, b, c, result }) => {
    it(`${a}, ${b}, ${c} -> ${result}`, () => {
      assert.deepStrictEqual(minFlips(a, b, c), result);
    });
  });
});
