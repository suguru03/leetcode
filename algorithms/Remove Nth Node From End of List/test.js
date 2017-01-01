'use strict';

const assert = require('assert');
const _ = require('lodash');
const { makeLinkNodes } = require('../util');
const { removeNthFromEnd } = require('./');

describe('#removeNthFromEnd', () => {

  const tests = [{
    l: [1, 2, 3, 4, 5],
    n: 2,
    result: [1, 2, 3, 5]
  }, {
    l: [1, 2, 3, 4, 5],
    n: 5,
    result: [2, 3, 4, 5]
  }, {
    l: [1],
    n: 1,
    result: []
  }];

  _.forEach(tests, task => {
    const { l, result } = task;
    task._l = makeLinkNodes(l);
    task._result = makeLinkNodes(result);
  });

  _.forEach(tests, ({ l, _l, n, result, _result }) => {
    it(`[${l}], n:${n} -> [${result}]`, () => {
      assert.deepEqual(removeNthFromEnd(_l, n), _result);
    });
  });
});
