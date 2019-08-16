'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maximumProduct } = require('./');

describe('#maximumProduct', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: 6,
    },
    {
      nums: [1, 2, 3, 4],
      result: 24,
    },
    {
      nums: [4, 3, 2, 1, 0],
      result: 24,
    },
    {
      nums: [1000, 1000, 2, 1, 2, 5, 3, 1],
      result: 5000000,
    },
    {
      nums: [-4, -3, -2, -1, 60],
      result: 720,
    },
    {
      nums: [-1, -2, -3],
      result: -6,
    },
    {
      nums: [-1, -2, -3, -4],
      result: -6,
    },
    {
      nums: [
        722,
        634,
        -504,
        -379,
        163,
        -613,
        -842,
        -578,
        750,
        951,
        -158,
        30,
        -238,
        -392,
        -487,
        -797,
        -157,
        -374,
        999,
        -5,
        -521,
        -879,
        -858,
        382,
      ],
      result: 753427818,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`[${nums}] -> ${result}`, () => {
      assert.strictEqual(maximumProduct(nums), result);
    });
  });
});
