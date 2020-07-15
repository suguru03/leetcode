'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxJumps } = require('./');

describe('#maxJumps', () => {
  const tests = [
    {
      arr: [6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12],
      d: 2,
      result: 4,
    },
    {
      arr: [7, 6, 5, 4, 3, 2, 1],
      d: 1,
      result: 7,
    },
  ];

  _.forEach(tests, ({ arr, d, result }) => {
    it(`${arr}, ${d} -> ${result}`, () => {
      assert.deepStrictEqual(maxJumps(arr, d), result);
    });
  });
});
