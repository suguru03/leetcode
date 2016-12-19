'use strict';

const assert = require('assert');
const _ = require('lodash');
const isPalindrome = require('./');

describe('#PalindromeNumber', () => {

  const tests = [{
    x: 123,
    result: false
  }, {
    x: -123,
    result: false
  }, {
    x: 101,
    result: true
  }, {
    x: 0,
    result: true
  }, {
    x: 2147483647,
    result: false
  }, {
    x: -2147483648,
    result: false
  }, {
    x: 111111111111,
    result: true
  }, {
    x: -1,
    result: false
  }, {
    x: -0,
    result: true
  }];

  _.forEach(tests, ({ x, result }) => {
    it(`[${x}] -> [${result}]`, () => {
      assert.strictEqual(isPalindrome(x), result);
    });
  });
});
