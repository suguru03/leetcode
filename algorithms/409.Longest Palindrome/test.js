'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestPalindrome } = require('./');

describe('#longestPalindrome', () => {
  const tests = [
    {
      s: 'abccccdd',
      result: 7,
    },
    {
      s: 'aabbccccdd',
      result: 7,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(longestPalindrome(s), result);
    });
  });
});
