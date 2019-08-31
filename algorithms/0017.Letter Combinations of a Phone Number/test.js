'use strict';

const assert = require('assert');
const _ = require('lodash');
const { letterCombinations } = require('./');

describe('#letterCombinations', () => {
  const tests = [
    {
      digits: '23',
      result: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
    },
    {
      digits: '97',
      result: ['wp', 'wq', 'wr', 'ws', 'xp', 'xq', 'xr', 'xs', 'yp', 'yq', 'yr', 'ys', 'zp', 'zq', 'zr', 'zs'],
    },
    {
      digits: '',
      result: [],
    },
  ];

  _.forEach(tests, ({ digits, result }) => {
    it(`${digits} -> ${result}`, () => {
      assert.deepStrictEqual(letterCombinations(digits), result);
    });
  });
});
