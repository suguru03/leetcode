'use strict';

const assert = require('assert');
const _ = require('lodash');
const { toHex } = require('./');

describe('#toHex', () => {
  const tests = [
    {
      n: 26,
      result: '1a',
    },
    {
      n: -1,
      result: 'ffffffff',
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(toHex(n), result);
    });
  });
});
