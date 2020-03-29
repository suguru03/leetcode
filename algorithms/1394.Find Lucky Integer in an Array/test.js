'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findLucky } = require('./');

describe('#findLucky', () => {
  const tests = [
    {
      arr: [2, 2, 3, 4],
      result: 2,
    },
    {
      arr: [1, 2, 2, 3, 3, 3],
      result: 3,
    },
    {
      arr: [2, 2, 2, 3, 3],
      result: -1,
    },
    {
      arr: [7, 7, 7, 7, 7, 7, 7],
      result: 7,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(findLucky(arr), result);
    });
  });
});
