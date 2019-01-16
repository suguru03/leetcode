'use strict';

const assert = require('assert');
const _ = require('lodash');
const { threeSum } = require('./');

describe('#threeSum', () => {
  const tests = [
    {
      nums: [-1, 0, 1, 2, -1, -4],
      result: [[-1, 0, 1], [-1, -1, 2]],
    },
    {
      nums: [-1, 0, 1, 0],
      result: [[-1, 0, 1]],
    },
    {
      nums: [0, 0],
      result: [],
    },
    {
      nums: [6, 2, 9, 3, -8, -4, -4, -10, -3, 1, 9, -9, 6, -6, 5, 5, -9, -9, 5],
      result: [
        [-10, 1, 9],
        [-10, 5, 5],
        [-9, 3, 6],
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, -3, 9],
        [-6, 1, 5],
        [-4, 1, 3],
        [-3, 1, 2],
      ],
    },
    {
      nums: [-2, 0, 1, 1, 2],
      result: [[-2, 0, 2], [-2, 1, 1]],
    },
    {
      nums: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
      result: [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(sort(threeSum(nums)), sort(result));
    });
  });

  function sort(matrix) {
    return matrix.sort((arr1, arr2) => {
      arr1.sort((a, b) => a - b);
      arr2.sort((a, b) => a - b);
      for (const [index, n] of arr1.entries()) {
        const diff = arr2[index] - n;
        if (diff) {
          return diff;
        }
      }
      return 0;
    });
  }
});
