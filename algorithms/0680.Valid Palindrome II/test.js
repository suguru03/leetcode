'use strict';

const assert = require('assert');
const _ = require('lodash');
const { validPalindrome } = require('./');

describe('#validPalindrome', () => {
  const tests = [
    {
      s: 'aba',
      result: true,
    },
    {
      s: 'abca',
      result: true,
    },
    {
      s: 'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga',
      result: true,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(validPalindrome(s), result);
    });
  });
});
