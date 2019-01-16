'use strict';

const assert = require('assert');
const _ = require('lodash');
const { middleNode } = require('./');
const { makeTestLinkNodes } = require('../utils');

describe('#middleNode', () => {
  const tests = [
    {
      head: [1, 2, 3, 4, 5],
      result: [3, 4, 5],
    },
    {
      head: [1, 2, 3, 4, 5, 6],
      result: [4, 5, 6],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`${_head} -> ${_result}`, () => {
      assert.deepStrictEqual(middleNode(head), result);
    });
  });
});
