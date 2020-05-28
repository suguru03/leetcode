'use strict';

const assert = require('assert');
const _ = require('lodash');

const { countBits } = require('./');

describe('#countBits', () => {
  const tests = [
    {
      num: 2,
      result: [0, 1, 1],
    },
    {
      num: 5,
      result: [0, 1, 1, 2, 1, 2],
    },
  ];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.deepStrictEqual(countBits(num), result);
    });
  });
});
