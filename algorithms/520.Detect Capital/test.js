'use strict';

const assert = require('assert');
const _ = require('lodash');
const { detectCapitalUse } = require('./');

describe('#detectCapitalUse', () => {

  const tests = [{
    word: 'USA',
    result: true
  }, {
    word: 'FlaG',
    result: false
  }, {
    word: 'leetcode',
    result: true
  }, {
    word: 'Google',
    result: true
  }];

  _.forEach(tests, ({ word, result }) => {
    it(`${word} -> ${result}`, () => {
      assert.strictEqual(detectCapitalUse(word), result);
    });
  });
});
