'use strict';

const assert = require('assert');
const _ = require('lodash');
const { validateBinaryTreeNodes } = require('./');

describe('#validateBinaryTreeNodes', () => {
  const tests = [
    {
      n: 4,
      leftChild: [1, -1, 3, -1],
      rightChild: [2, -1, -1, -1],
      result: true,
    },
    {
      n: 4,
      leftChild: [1, -1, 3, -1],
      rightChild: [2, 3, -1, -1],
      result: false,
    },
    {
      n: 2,
      leftChild: [1, 0],
      rightChild: [-1, -1],
      result: false,
    },
    {
      n: 6,
      leftChild: [1, -1, -1, 4, -1, -1],
      rightChild: [2, -1, -1, 5, -1, -1],
      result: false,
    },
  ];

  _.forEach(tests, ({ n, leftChild, rightChild, result }) => {
    it(`${n}, ${leftChild}, ${rightChild} -> ${result}`, () => {
      assert.deepStrictEqual(validateBinaryTreeNodes(n, leftChild, rightChild), result);
    });
  });
});
