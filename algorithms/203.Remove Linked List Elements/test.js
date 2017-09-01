'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeElements } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#removeElements', () => {

  const tests = [{
    head: [1, 2, 6, 3, 4, 5, 6],
    val: 6,
    result: [1, 2, 3, 4, 5]
  }, {
    head: [6, 1, 2, 6, 3, 4, 5, 6],
    val: 6,
    result: [1, 2, 3, 4, 5]
  }, {
    head: [],
    val: 1,
    result: []
  }];
  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ head, _head, val, result, _result }) => {
    it(`[${_head}], val: ${val} -> [${_result}]`, () => {
      assert.deepEqual(removeElements(head, val), result);
    });
  });
});
