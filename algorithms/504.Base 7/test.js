'use strict';

const assert = require('assert');
const _ = require('lodash');
const { convertToBase7 } = require('./');

describe('#convertToBase7', () => {

  const tests = [{
    num: 100,
    result: '202'
  }, {
    num: 101,
    result: '203'
  }, {
    num: -7,
    result: '-10'
  }, {
    num: 0,
    result: '0'
  }];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.strictEqual(convertToBase7(num), result);
    });
  });
});
