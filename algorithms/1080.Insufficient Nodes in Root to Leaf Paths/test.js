'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sufficientSubset } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#sufficientSubset', () => {
  const tests = [
    {
      root: [1, 2, 3, 4, -99, -99, 7, 8, 9, -99, -99, 12, 13, -99, 14],
      limit: 1,
      result: [1, 2, 3, 4, null, null, 7, 8, 9, null, 14],
    },
    {
      root: [5, 4, 8, 11, null, 17, 4, 7, 1, null, null, 5, 3],
      limit: 22,
      result: [5, 4, 8, 11, null, 17, 4, 7, null, null, null, 5],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ root, _root, limit, result, _result }) => {
    it(`${_root}, ${limit} -> ${_result}`, () => {
      assert.deepStrictEqual(sufficientSubset(root, limit), result);
    });
  });
});
