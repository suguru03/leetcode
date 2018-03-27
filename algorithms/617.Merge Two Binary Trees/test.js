'use strict';

const assert = require('assert');
const _ = require('lodash');
const { mergeTrees } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#mergeTrees', () => {
  const tests = [
    {
      t1: [1, 3, 2, 5],
      t2: [2, 1, 3, null, 4, null, 7],
      result: [3, 4, 5, 5, 4, null, 7],
    },
  ];
  makeTestTreeNodes(tests, 't1');
  makeTestTreeNodes(tests, 't2');
  makeTestTreeNodes(tests, 'result');

  _.forEach(tests, ({ t1, _t1, t2, _t2, result, _result }) => {
    it(`${_t1}, ${_t2} -> ${_result}`, () => {
      assert.deepStrictEqual(mergeTrees(t1, t2), result);
    });
  });
});
