'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxDepthAfterSplit } = require('./');

describe('#maxDepthAfterSplit', () => {
  const tests = [
    {
      seq: '(()())',
      result: [0, 1, 1, 1, 1, 0],
    },
    {
      seq: '()(())()',
      result: [0, 0, 0, 1, 1, 0, 0, 0],
    },
  ];

  _.forEach(tests, ({ seq, result }) => {
    it(`${seq} -> ${result}`, () => {
      assert.deepStrictEqual(maxDepthAfterSplit(seq), result);
    });
  });
});
