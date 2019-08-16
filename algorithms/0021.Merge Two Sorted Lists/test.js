'use strict';

const assert = require('assert');
const _ = require('lodash');
const { mergeTwoLists } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#mergeTwoLists', () => {
  const tests = [
    {
      l1: [],
      l2: [],
      result: [],
    },
    {
      l1: [1, 3, 5],
      l2: [2, 4, 6],
      result: [1, 2, 3, 4, 5, 6],
    },
    {
      l1: [],
      l2: [2, 4, 6],
      result: [2, 4, 6],
    },
  ];

  makeTestLinkNodes(tests, 'l1');
  makeTestLinkNodes(tests, 'l2');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ l1, _l1, l2, _l2, result, _result }) => {
    it(`[${_l1}] + [${_l2}]-> [${_result}]`, () => {
      assert.deepEqual(mergeTwoLists(l1, l2), result);
    });
  });
});
