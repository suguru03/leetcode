'use strict';

const assert = require('assert');
const _ = require('lodash');
const { getRow } = require('./');

describe('#getRow', () => {

  const tests = [{
    rowIndex: 0,
    result: [1]
  }, {
    rowIndex: 1,
    result: [1, 1]
  }, {
    rowIndex: 2,
    result: [1, 2, 1]
  }, {
    rowIndex: 3,
    result: [1, 3, 3, 1]
  }, {
    rowIndex: 4,
    result: [1, 4, 6, 4, 1]
  }, {
    rowIndex: 5,
    result: [1, 5, 10, 10, 5, 1]
  }, {
    rowIndex: 6,
    result: [1, 6, 15, 20, 15, 6, 1]
  }];

  _.forEach(tests, ({ rowIndex, result }) => {
    it(`${rowIndex} -> ${result}`, () => {
      assert.deepEqual(getRow(rowIndex), result);
    });
  });
});
