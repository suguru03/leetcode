'use strict';

const assert = require('assert');
const _ = require('lodash');
const { diameterOfBinaryTree } = require('./');

describe('#diameterOfBinaryTree', () => {
  const tests = [
    {
      root: '',
      result: 0,
    },
  ];

  _.forEach(tests, ({ root, result }) => {
    it(`${root} -> ${result}`, () => {
      assert.deepStrictEqual(diameterOfBinaryTree(root), result);
    });
  });
});
