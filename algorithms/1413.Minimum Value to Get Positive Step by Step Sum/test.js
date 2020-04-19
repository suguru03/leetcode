'use strict';

const assert = require('assert');
const _ = require('lodash');

const { minStartValue } = require('./');

describe('#minStartValue', () => {
  const tests = [
    {
      nums: [-3, 2, -3, 4, 2],
      result: 5,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(minStartValue(nums), result);
    });
  });
});
