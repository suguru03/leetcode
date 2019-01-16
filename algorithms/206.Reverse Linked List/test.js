'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reverseList } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#reverseList', () => {
  const tests = [
    {
      head: [1, 2, 3],
      result: [3, 2, 1],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`[${_head}] -> [${_result}]`, () => {
      assert.deepEqual(reverseList(head), result);
    });
  });
});
