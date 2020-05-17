'use strict';

const assert = require('assert');
const _ = require('lodash');

const { oddEvenList } = require('./');
const { makeTestLinkNodes } = require('../utils');

describe('#oddEvenList', () => {
  const tests = [
    {
      head: [1, 2, 3, 4, 5],
      result: [1, 3, 5, 2, 4],
    },
    {
      head: [2, 1, 3, 5, 6, 4, 7],
      result: [2, 3, 6, 7, 1, 5, 4],
    },
    {
      head: [],
      result: [],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`${_head} -> ${_result}`, () => {
      assert.deepStrictEqual(oddEvenList(head), result);
    });
  });
});
