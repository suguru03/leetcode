'use strict';

const assert = require('assert');
const _ = require('lodash');
const { deleteDuplicates } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#deleteDuplicates', () => {
  const tests = [
    {
      head: [],
      result: [],
    },
    {
      head: [1],
      result: [1],
    },
    {
      head: [0, 0, 1, 1, 2, 2, 3, 3],
      result: [0, 1, 2, 3],
    },
    {
      head: [1, 1, 2],
      result: [1, 2],
    },
    {
      head: [1, 1, 2, 2],
      result: [1, 2],
    },
    {
      head: [1, 1, 2, 3, 3],
      result: [1, 2, 3],
    },
  ];

  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`[${_head}] -> [${_result}]`, () => {
      assert.deepEqual(deleteDuplicates(head), result);
    });
  });
});
