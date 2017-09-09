'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isPalindrome } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#isPalindrome', () => {

  const tests = [{
    head: [1, 2, 1],
    result: true
  }, {
    head: [1, 4, 4, 1],
    result: true
  }, {
    head: [1, 4, 5, 1, 1],
    result: false
  }];
  makeTestLinkNodes(tests, 'head');

  _.forEach(tests, ({ head, _head, result }) => {
    it(`[${_head}] -> ${result}`, () => {
      assert.strictEqual(isPalindrome(head), result);
    });
  });
});
