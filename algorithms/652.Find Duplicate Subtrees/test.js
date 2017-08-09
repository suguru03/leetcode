'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findDuplicateSubtrees } = require('./');
const { makeTreeNodes, makeTestTreeNodes } = require('../util');

describe('#findDuplicateSubtrees', () => {

  const tests = [{
    root: [2, 1, 1],
    result: [[1]]
  }, {
    root: [1, 2, 3, 4, null, 2, 4, null, null, 4],
    result: [[4], [2, 4]]
  }, {
    root: [2, 2, 2, 3, null, 3, null],
    result: [[3], [2, 3]]
  }, {
    root: [0, 0, 0, 0, null, null, 0, null, null, null, 0],
    result: [[0]]
  }, {
    root: [0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0],
    result: []
  }, {
    root: [0, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0],
    result: []
  }];
  makeTestTreeNodes(tests);
  _.forEach(tests, test => {
    const { result } = test;
    test.result = _.map(result, makeTreeNodes);
    test._result = result;
  });

  _.forEach(tests, ({ root, _root, result, _result }) => {
    it(`[${_root}] -> [${_result}]`, () => {
      assert.deepEqual(findDuplicateSubtrees(root), result);
    });
  });
});
