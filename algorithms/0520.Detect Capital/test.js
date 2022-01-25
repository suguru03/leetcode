'use strict';

const assert = require('assert');

const { detectCapitalUse } = require('./');

describe('#detectCapitalUse', () => {
  const tests = [
    {
      word: 'USA',
      result: true,
    },
    {
      word: 'FlaG',
      result: false,
    },
    {
      word: 'leetcode',
      result: true,
    },
    {
      word: 'Google',
      result: true,
    },
  ];

  for (const { word, result } of tests) {
    it(`${word} -> ${result}`, () => {
      assert.strictEqual(detectCapitalUse(word), result);
    });
  }
});
