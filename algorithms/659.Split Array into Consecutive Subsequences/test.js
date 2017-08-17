'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isPossible } = require('./');

describe('#isPossible', () => {

  const tests = [{
    input: [1, 2, 3, 3, 4, 5],
    result: true
  }, {
    input: [1, 2, 3, 3, 4, 4, 5, 5],
    result: true
  }, {
    input: [0, 1, 1, 2, 2, 3, 3, 4, 5],
    result: true
  }, {
    input: [1, 2, 3, 3, 4, 4, 4, 5, 5],
    result: false
  }, {
    input: [-2, -1, 0, 1, 2, 3],
    result: true
  }, {
    input: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
    result: true
  }, {
    input: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 16, 17, 18, 20, 21, 22],
    result: true
  }, {
    input: [3, 4, 4, 5, 6, 7, 8, 9, 10, 11],
    result: false
  }, {
    input: [1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10],
    result: true
  }];

  _.forEach(tests, ({ input, result }) => {
    it(`[${input}] -> ${result}`, () => {
      assert.strictEqual(isPossible(input), result);
    });
  });
});
