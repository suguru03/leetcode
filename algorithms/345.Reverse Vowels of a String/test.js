'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reverseVowels } = require('./');

describe('#reverseVowels', () => {

  const tests = [{
    s: 'hello',
    result: 'holle'
  }, {
    s: 'leetcode',
    result: 'leotcede'
  }, {
    s: 'aeiou',
    result: 'uoiea'
  }, {
    s: 'aeiou',
    result: 'uoiea'
  }, {
    s: 'AEIOU',
    result: 'UOIEA'
  }];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(reverseVowels(s), result);
    });
  });
});
