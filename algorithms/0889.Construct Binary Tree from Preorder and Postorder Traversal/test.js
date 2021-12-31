'use strict';

const assert = require('assert');

const { constructFromPrePost } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#constructFromPrePost', () => {
  const tests = [
    {
      preorder: [1, 2, 4, 5, 3, 6, 7],
      postorder: [4, 5, 2, 6, 7, 3, 1],
      result: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      preorder: [3, 4, 2, 1],
      postorder: [2, 1, 4, 3],
      result: [3, 4, null, 2, 1],
    },
  ];
  makeTestTreeNodes(tests, 'result');

  for (const { preorder, postorder, result, _result } of tests) {
    it(`${preorder}, ${postorder} -> ${_result}`, () => {
      assert.deepStrictEqual(constructFromPrePost(preorder, postorder), result);
    });
  }
});
