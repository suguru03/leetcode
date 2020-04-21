'use strict';

const assert = require('assert');
const _ = require('lodash');

const { bstFromPreorder } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#bstFromPreorder', () => {
  const tests = [
    {
      preorder: [8, 5, 1, 7, 10, 12],
      result: [8, 5, 10, 1, 7, null, 12],
    },
    {
      preorder: [4, 2],
      result: [4, 2],
    },
  ];
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ preorder, result, _result }) => {
    it(`${preorder} -> ${_result}`, () => {
      assert.deepStrictEqual(bstFromPreorder(preorder), result);
    });
  });
});
