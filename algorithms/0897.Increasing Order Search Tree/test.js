'use strict';

const assert = require('assert');
const _ = require('lodash');
const { increasingBST } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#increasingBST', () => {
  const tests = [
    {
      root: [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9],
      result: [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9],
    },
    {
      root: [379, 826],
      result: [826, null, 379],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, result, _result }) => {
    it(`${_root} -> ${_result}`, () => {
      assert.deepStrictEqual(increasingBST(root), result);
    });
  });
});
