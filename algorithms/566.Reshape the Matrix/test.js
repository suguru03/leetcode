'use strict';

const assert = require('assert');
const _ = require('lodash');
const { matrixReshape } = require('./');

describe('#matrixReshape', () => {

  const tests = [{
    nums: [[1, 2], [3, 4]],
    r: 1,
    c: 4,
    result: [[1, 2, 3, 4]]
  }, {
    nums: [[1, 2], [3, 4]],
    r: 1,
    c: 4,
    result: [[1, 2, 3, 4]]
  }, {
    nums: [[1, 2], [3, 4], [5, 6], [7, 8], [9]],
    r: 3,
    c: 3,
    result: [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
  }, {
    nums: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    r: 1,
    c: 9,
    result: [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
  }, {
    nums: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    r: 9,
    c: 1,
    result: [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
  }, {
    nums: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
    r: 3,
    c: 3,
    result: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  }];

  _.forEach(tests, ({ nums, r, c, result }) => {
    it(`[${nums}], r: ${r}, c: ${c} -> ${result}`, () => {
      assert.deepEqual(matrixReshape(nums, r, c), result);
    });
  });
});
