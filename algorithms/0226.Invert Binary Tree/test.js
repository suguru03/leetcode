'use strict';

const assert = require('assert');
const _ = require('lodash');
const { invertTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#invertTree', () => {
  const tests = [
    {
      root: [4, 2, 7, 1, 3, 6, 9],
      result: [4, 7, 2, 9, 6, 3, 1],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, result, _result }) => {
    it(`[${_root}] -> [${_result}]`, () => {
      assert.deepEqual(invertTree(root), result);
    });
  });
});
