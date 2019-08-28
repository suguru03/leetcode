'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeZeroSumSublists } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#removeZeroSumSublists', () => {
  const tests = [
    {
      head: [1, 2, -3, 3, 1],
      result: [3, 1],
    },
    {
      head: [1, 2, 3, -3, 4],
      result: [1, 2, 4],
    },
    {
      head: [1, 2, 3, -3, -2],
      result: [1],
    },
    {
      head: [1, 3, 2, -3, -2, 5, 5, -5, 1],
      result: [1, 5, 1],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`${_head} -> ${_result}`, () => {
      assert.deepStrictEqual(removeZeroSumSublists(head), result);
    });
  });
});
