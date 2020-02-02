'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maximum69Number } = require('./');

describe('#maximum69Number', () => {
  const tests = [
    {
      num: 9669,
      result: 9969,
    },
  ];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.deepStrictEqual(maximum69Number(num), result);
    });
  });
});
