'use strict';

const assert = require('assert');
const _ = require('lodash');
const { constructRectangle2: constructRectangle } = require('./');

describe('#constructRectangle', () => {

  const tests = [{
    area: 4,
    result: [2, 2]
  }, {
    area: 6,
    result: [3, 2]
  }, {
    area: 12,
    result: [4, 3]
  }, {
    area: 1,
    result: [1, 1]
  }, {
    area: 2,
    result: [2, 1]
  }, {
    area: 3,
    result: [3, 1]
  }, {
    area: 5,
    result: [5, 1]
  }, {
    area: 9999994,
    result: [116279, 86]
  }];

  _.forEach(tests, ({ area, result }) => {
    it(`${area} -> ${result}`, () => {
      assert.deepEqual(constructRectangle(area), result);
    });
  });
});
