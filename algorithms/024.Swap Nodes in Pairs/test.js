'use strict';

const assert = require('assert');
const _ = require('lodash');
const { swapPairs } = require('./');
const { makeTestLinkNodes } = require('../util');

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

  makeTestLinkNodes(tests, 'l');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ l, _l, result, _result }) => {
    it(`[${_l}] -> [${_result}]`, () => {
      assert.deepEqual(swapPairs(l), result);
    });
  });
});
