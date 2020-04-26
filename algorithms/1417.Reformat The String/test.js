'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reformat } = require('./');

describe('#reformat', () => {
  const tests = [
    {
      s: 'a0b1c2',
      result: '0a1b2c',
    },
    {
      s: 'leetcode',
      result: '',
    },
    {
      s: 'a01',
      result: '0a1',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(reformat(s), result);
    });
  });
});
