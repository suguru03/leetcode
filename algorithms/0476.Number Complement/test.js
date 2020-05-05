'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findComplement } = require('./');

describe('#findComplement', () => {
  const tests = [
    {
      num: 5,
      result: 2,
    },
    {
      num: 4,
      result: 3,
    },
    {
      num: 16,
      result: 15,
    },
  ];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.deepStrictEqual(findComplement(num), result);
    });
  });
});
