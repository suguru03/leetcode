'use strict';

const assert = require('assert');
const _ = require('lodash');
const { addBinary } = require('./');

describe('#addBinary', () => {

  const tests = [{
    a: '11',
    b: '1',
    result: '100'
  }, {
    a: '10101',
    b: '1010',
    result: '11111'
  }];

  _.forEach(tests, ({ a, b, result }) => {
    it(`${a} + ${b} -> ${result}`, () => {
      assert.strictEqual(addBinary(a, b), result);
    });
  });
});
