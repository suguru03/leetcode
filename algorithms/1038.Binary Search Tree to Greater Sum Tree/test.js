'use strict';

const assert = require('assert');
const _ = require('lodash');

const { bstToGst } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#bstToGst', () => {
  const tests = [
    {
      root: [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8],
      result: [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, result, _result }) => {
    it(`${_root} -> ${_result}`, () => {
      assert.deepStrictEqual(bstToGst(root), result);
    });
  });
});
