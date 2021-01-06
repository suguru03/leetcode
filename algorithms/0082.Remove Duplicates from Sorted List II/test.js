'use strict';

const assert = require('assert');
const _ = require('lodash');

const { deleteDuplicates } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#deleteDuplicates', () => {
  const tests = [
    {
      head: [1, 2, 3, 3, 4, 4, 5],
      result: [1, 2, 5],
    },
    {
      head: [1, 2, 2],
      result: [1],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`${_head} -> ${_result}`, () => {
      assert.deepStrictEqual(deleteDuplicates(head), result);
    });
  });
});
