'use strict';

const assert = require('assert');
const _ = require('lodash');

const { flatten } = require('./');

describe('#hammingDistance', () => {
  const tests = [];

  _.forEach(tests, ({ head, _head, result, _result }) => {
    it(`${_head} -> ${_result}`, () => {
      assert.deepStrictEqual(flatten(head), result);
    });
  });
});
