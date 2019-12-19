'use strict';

const assert = require('assert');
const _ = require('lodash');

const { getDecimalValue } = require('./');
const { makeTestLinkNodes } = require('../utils');

describe('#getDecimalValue', () => {
  const tests = [
    {
      head: [1, 0, 1],
      result: 5,
    },
  ];
  makeTestLinkNodes(tests, 'head');

  _.forEach(tests, ({ head, _head, result }) => {
    it(`${_head} -> ${result}`, () => {
      assert.deepStrictEqual(getDecimalValue(head), result);
    });
  });
});
