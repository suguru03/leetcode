'use strict';

const assert = require('assert');
const _ = require('lodash');
const addTwoNumbers = require('./');
const { makeLinkNodes } = require('../util');

describe('#addTwoNumbers', () => {

  const tests = [{
    l1: [2, 4, 3],
    l2: [5, 6, 4],
    result: [7, 0, 8]
  }, {
    l1: [5, 6, 3],
    l2: [8, 4, 2],
    result: [3, 1, 6]
  }, {
    l1: [7, 5, 9, 4, 6],
    l2: [8, 4],
    result: [5, 0, 0, 5, 6]
  }];

  _.forEach(tests, test => {
    const { l1, l2 } = test;
    test._l1 = makeLinkNodes(l1);
    test._l2 = makeLinkNodes(l2);
  });

  _.forEach(tests, ({ l1, _l1, l2, _l2, result }) => {
    it(`[${l1}] + [${l2}] = [${result}]`, () => {
      assert.deepEqual(addTwoNumbers(_l1, _l2), result);
    });
  });
});
