'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isPalindrome } = require('./');

describe('#isPalindrome', () => {
  const tests = [
    {
      s: 'A man, a plan, a canal: Panama',
      result: true,
    },
    {
      s: 'A',
      result: true,
    },
    {
      s: 'aA',
      result: true,
    },
    {
      s: '',
      result: true,
    },
    {
      s: 'abA',
      result: true,
    },
    {
      s: 'race a car',
      result: false,
    },
    {
      s: 'a.',
      result: true,
    },
    {
      s: '.',
      result: true,
    },
    {
      s: '0P',
      result: false,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(isPalindrome(s), result);
    });
  });
});
