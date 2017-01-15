'use strict';

const assert = require('assert');
const _ = require('lodash');
const { makeLinkNodes } = require('../util');
const { mergeTwoLists } = require('./');

describe('#mergeTwoLists', () => {

  const tests = [{
    l1: [],
    l2: [],
    result: []
  }, {
    l1: [1, 3, 5],
    l2: [2, 4, 6],
    result: [1, 2, 3, 4, 5, 6]
  }, {
    l1: [],
    l2: [2, 4, 6],
    result: [2, 4, 6]
  }];

  _.forEach(tests, task => {
    const { l1, l2, result } = task;
    task._l1 = makeLinkNodes(l1);
    task._l2 = makeLinkNodes(l2);
    task._result = makeLinkNodes(result);
  });

  _.forEach(tests, ({ l1, _l1, l2, _l2, result, _result }) => {
    it(`[${l1}] + [${l2}]-> [${result}]`, () => {
      assert.deepEqual(mergeTwoLists(_l1, _l2), _result);
    });
  });
});
