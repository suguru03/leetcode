'use strict';

const assert = require('assert');
const _ = require('lodash');

const { buildTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#buildTree', () => {
  const tests = [
    {
      inorder: [9, 3, 15, 20, 7],
      postorder: [9, 15, 7, 20, 3],
      result: [3, 9, 20, null, null, 15, 7],
    },
    {
      inorder: [9, 3, 15, 7, 20],
      postorder: [9, 3, 7, 20, 15],
      result: [15, 3, 20, 9, null, 7],
    },
  ];
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ inorder, postorder, result, _result }) => {
    it(`${inorder}, ${postorder} -> ${_result}`, () => {
      assert.deepStrictEqual(buildTree(inorder, postorder), result);
    });
  });
});
