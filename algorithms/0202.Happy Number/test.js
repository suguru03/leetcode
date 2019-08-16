'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isHappy } = require('./');

describe('#isHappy', () => {
  const tests = [
    {
      n: 19,
      result: true,
    },
    {
      n: 321321,
      result: true,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(isHappy(n), result);
    });
  });
});
