'use strict';

const assert = require('assert');
const _ = require('lodash');
const { repeatedSubstringPattern } = require('./');

describe('#repeatedSubstringPattern', () => {
  const tests = [
    {
      s: 'abab',
      result: true,
    },
    {
      s: 'ababab',
      result: true,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(repeatedSubstringPattern(s), result);
    });
  });
});
