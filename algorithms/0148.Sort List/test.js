'use strict';

const assert = require('assert');
const _ = require('lodash');

const { sortList } = require('./');
const { makeTestLinkNodes } = require('../utils');

describe('#sortList', () => {
  const tests = [
    {
      head: [4, 2, 1, 3],
      result: [1, 2, 3, 4],
    },
    {
      head: [-1, 5, 3, 4, 0],
      result: [-1, 0, 3, 4, 5],
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`${_head} -> ${_result}`, () => {
      assert.deepStrictEqual(sortList(head), result);
    });
  });
});
