'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findSpecialInteger } = require('./');

describe('#findSpecialInteger', () => {
  const tests = [
    {
      arr: [1, 2, 2, 6, 6, 6, 6, 7, 10],
      result: 6,
    },
    {
      arr: [1, 2, 2, 3, 4, 6, 6, 6, 6],
      result: 6,
    },
    {
      arr: [1],
      result: 1,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(findSpecialInteger(arr), result);
    });
  });
});
