'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestCommonPrefix } = require('./');

describe('#LongestCommonPrefix', () => {

  const tests = [{
    strs: ['123', '1234', '1212'],
    result: '12'
  }, {
    strs: ['apple', 'application'],
    result: 'appl'
  }, {
    strs: ['apple', 'egg'],
    result: ''
  }, {
    strs: ['a', 'ab'],
    result: 'a'
  }, {
    strs: ['abbbbb', 'ab', 'abc', 'abcd', 'abcdea', 'abcdef', 'abcdef'],
    result: 'ab'
  }, {
    strs: ['aca', 'cba'],
    result: ''
  }];

  _.forEach(tests, ({ strs, result }) => {
    it(`[${strs}] -> ${result}`, () => {
      assert.strictEqual(longestCommonPrefix(strs), result);
    });
  });
});
