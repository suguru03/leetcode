'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isUgly } = require('./');

describe('#isUgly', () => {
  const tests = [
    {
      num: 12,
      result: true,
    },
    {
      num: 14,
      result: false,
    },
    {
      num: 17,
      result: false,
    },
  ];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.strictEqual(isUgly(num), result);
    });
  });
});
