'use strict';

const assert = require('assert');
const _ = require('lodash');
const { canConstruct } = require('./');

describe('#canConstruct', () => {
  const tests = [
    {
      ransomNote: 'a',
      magazine: 'b',
      result: false,
    },
    {
      ransomNote: 'ababa',
      magazine: 'baaab',
      result: true,
    },
  ];

  _.forEach(tests, ({ ransomNote, magazine, result }) => {
    it(`${ransomNote}, ${magazine} -> ${result}`, () => {
      assert.strictEqual(canConstruct(ransomNote, magazine), result);
    });
  });
});
