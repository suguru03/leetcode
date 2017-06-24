'use strict';

const assert = require('assert');
const _ = require('lodash');
const { checkPerfectNumber } = require('./');

describe('#checkPerfectNumber', () => {

  const tests = [{
    num: 1,
    result: false
  }, {
    num: 6,
    result: true
  }, {
    num: 28,
    result: true
  }, {
    num: 496,
    result: true
  }, {
    num: 8128,
    result: true
  }, {
    num: 0,
    result: false
  }, {
    num: 2,
    result: false
  }, {
    num: 3,
    result: false
  }];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> [${result}]`, () => {
      assert.deepEqual(checkPerfectNumber(num), result);
    });
  });
});
