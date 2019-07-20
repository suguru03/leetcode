'use strict';

const assert = require('assert');
const _ = require('lodash');
const { lcaDeepestLeaves } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#lcaDeepestLeaves', () => {
  const tests = [
    {
      root: [1, 2, 3],
      result: [1, 2, 3],
    },
    {
      root: [1, 2, 3, 4],
      result: [4],
    },
    {
      root: [1, 2, 3, 4, 5],
      result: [2, 4, 5],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, result, _result }) => {
    it(`${_root} -> ${_result}`, () => {
      assert.deepStrictEqual(lcaDeepestLeaves(root), result);
    });
  });
});
