'use strict';

const assert = require('assert');

const { sortedListToBST } = require('./');
const { makeTestLinkNodes, makeTestTreeNodes } = require('../utils');

describe('#sortedListToBST', () => {
  const tests = [
    {
      head: [-10, -3, 0, 5, 9],
      result: [0, -10, 5, null, -3, null, 9],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestTreeNodes(tests, 'result');

  for (const { head, _head, result, _result } of tests) {
    it(`${_head} -> ${_result}`, () => {
      assert.deepStrictEqual(sortedListToBST(head), result);
    });
  }
});
