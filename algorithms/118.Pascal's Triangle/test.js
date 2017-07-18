'use strict';

const assert = require('assert');
const _ = require('lodash');
const { generate } = require('./');

describe('#generate', () => {

  const tests = [{
    numRows: 1,
    result: [[1]]
  }, {
    numRows: 2,
    result: [[1], [1, 1]]
  }, {
    numRows: 3,
    result: [[1], [1, 1], [1, 2, 1]]
  }, {
    numRows: 5,
    result: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
  }];

  _.forEach(tests, ({ numRows, result }) => {
    it(`${numRows} -> ${result}`, () => {
      assert.deepEqual(generate(numRows), result);
    });
  });
});
