'use strict';

const assert = require('assert');
const _ = require('lodash');
const { makeLinkNodes } = require('../util');
const { swapPairs } = require('./');

describe('#swapPairs', () => {

  const tests = [{
    l: [1, 2, 3, 4],
    result: [2, 1, 4, 3]
  }, {
    l: [1, 2, 3, 4, 5],
    result: [2, 1, 4, 3, 5]
  }, {
    l: [],
    result: []
  }];

  _.forEach(tests, task => {
    const { l, result } = task;
    task._l = makeLinkNodes(l);
    task._result = makeLinkNodes(result);
  });

  _.forEach(tests, ({ l, _l, result, _result }) => {
    it(`[${l}] -> [${result}]`, () => {
      assert.deepEqual(swapPairs(_l), _result);
    });
  });
});
