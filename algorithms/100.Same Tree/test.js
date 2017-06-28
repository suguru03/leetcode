'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isSameTree } = require('./');
const { makeTreeNodes } = require('../util');

describe('#isSameTree', () => {

  const tests = [{
    p: [1, 2, 3, 4, 5],
    q: [1, 2, 3, 4, 5],
    result: true
  }, {
    p: [1, 2, 3, 4, 5, 6],
    q: [1, 2, 3, 4, 5],
    result: false
  }, {
    p: [],
    q: [],
    result: true
  }, {
    p: [1],
    q: [1],
    result: true
  }, {
    p: [2, 1],
    q: [1, 2],
    result: false
  }];

  _.forEach(tests, test => {
    const p = makeTreeNodes(test.p);
    const q = makeTreeNodes(test.q);
    test._p = test.p;
    test._q = test.q;
    test.p = p;
    test.q = q;
  });

  _.forEach(tests, ({ p, q, _p, _q, result }) => {
    it(`[${_p}], [${_q}] -> ${result}`, () => {
      assert.strictEqual(isSameTree(p, q), result);
    });
  });
});
