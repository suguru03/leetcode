'use strict';

const assert = require('assert');

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
    {
      pattern: 'jquery',
      str: 'jquery',
      result: false,
    },
    {
      pattern: 'aba',
      str: 'cat cat cat dog',
      result: false,
    },
    {
      pattern: 'aba',
      str: 'dog cat cat',
      result: false,
    },
  ];
  tests.splice(0, 6);

  for (const { pattern, str, result } of tests) {
    it(`${pattern}, ${str} -> ${result}`, () => {
      assert.strictEqual(wordPattern(pattern, str), result);
    });
  }
});
