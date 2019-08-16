'use strict';

const assert = require('assert');
const _ = require('lodash');
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
  ];

  _.forEach(tests, ({ arr, k, x, result }) => {
    it(`[${arr}], k: ${k}, x: ${x} -> [${result}]`, () => {
      assert.deepEqual(findClosestElements(arr, k, x), result);
    });
  });
});
