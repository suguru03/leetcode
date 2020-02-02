'use strict';

const assert = require('assert');
const _ = require('lodash');
const { breakPalindrome } = require('./');

describe('#breakPalindrome', () => {
  const tests = [
    {
      palindrome: 'abccba',
      result: 'aaccba',
    },
    {
      palindrome: 'a',
      result: '',
    },
    {
      palindrome: 'aba',
      result: 'abb',
    },
  ];

  _.forEach(tests, ({ palindrome, result }) => {
    it(`${palindrome} -> ${result}`, () => {
      assert.deepStrictEqual(breakPalindrome(palindrome), result);
    });
  });
});
