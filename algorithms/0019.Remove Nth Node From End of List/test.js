'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeNthFromEnd } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#removeNthFromEnd', () => {
  const tests = [
    {
      l: [1, 2, 3, 4, 5],
      n: 2,
      result: [1, 2, 3, 5],
    },
    {
      l: [1, 2, 3, 4, 5],
      n: 5,
      result: [2, 3, 4, 5],
    },
    {
      l: [1],
      n: 1,
      result: [],
    },
  ];

  makeTestLinkNodes(tests, 'l');
  makeTestLinkNodes(tests, 'result');

  _.forEach(tests, ({ l, _l, n, result, _result }) => {
    it(`[${_l}], n:${n} -> [${_result}]`, () => {
      assert.deepEqual(removeNthFromEnd(l, n), result);
    });
  });
});
