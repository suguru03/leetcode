'use strict';

const assert = require('assert');

const { swapNodes } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#swapNodes', () => {
  const tests = [
    {
      head: [1, 2, 3, 4, 5],
      k: 2,
      result: [1, 4, 3, 2, 5],
    },
    {
      head: [1, 2],
      k: 1,
      result: [2, 1],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  for (const { head, _head, k, result, _result } of tests) {
    it(`${_head}, ${k} -> ${_result}`, () => {
      assert.deepStrictEqual(swapNodes(head, k), result);
    });
  }
});
