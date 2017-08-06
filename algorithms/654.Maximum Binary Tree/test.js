'use strict';

const assert = require('assert');
const _ = require('lodash');
const { constructMaximumBinaryTree } = require('./');
const { makeTreeNodes } = require('../util');

describe('#constructMaximumBinaryTree', () => {

  const tests = [{
    nums: [3, 2, 1, 6, 0, 5],
    result: [6, 3, 5, null, 2, 0, null, null, 1]
  }];
  _.forEach(tests, test => {
    const { result } = test;
    test.result = makeTreeNodes(result);
    test._result = result;
  });

  _.forEach(tests, ({ nums, result, _result }) => {
    it(`[${nums}] -> [${_result}]`, () => {
      assert.strictEqual(constructMaximumBinaryTree(nums), result);
    });
  });
});
