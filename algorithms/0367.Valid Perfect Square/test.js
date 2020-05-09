'use strict';

const assert = require('assert');
const _ = require('lodash');

const { isPerfectSquare } = require('./');

describe('#isPerfectSquare', () => {
  const tests = [
    {
      num: 16,
      result: true,
    },
    {
      num: 14,
      result: false,
    },
  ];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.strictEqual(isPerfectSquare(num), result);
    });
  });
});
