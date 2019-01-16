'use strict';

const assert = require('assert');
const _ = require('lodash');
const { wordPattern } = require('./');

describe('#wordPattern', () => {
  const tests = [
    {
      pattern: 'abba',
      str: 'dog cat cat dog',
      result: true,
    },
    {
      pattern: 'abba',
      str: 'dog cat cat fish',
      result: false,
    },
    {
      pattern: 'abba',
      str: 'dog dog dog dog',
      result: false,
    },
    {
      pattern: 'ab',
      str: 'dog dog',
      result: false,
    },
  ];

  _.forEach(tests, ({ pattern, str, result }) => {
    it(`${pattern}, ${str} -> ${result}`, () => {
      assert.strictEqual(wordPattern(pattern, str), result);
    });
  });
});
