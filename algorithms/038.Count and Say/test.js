'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countAndSay } = require('./');

describe('#countAndSay', () => {

  const tests = [{
    n: 0,
    result: '1'
  }, {
    n: 1,
    result: '1'
  }, {
    n: 2,
    result: '11'
  }, {
    n: 3,
    result: '21'
  }, {
    n: 4,
    result: '1211'
  }, {
    n: 5,
    result: '111221'
  }, {
    n: 10,
    result: '13211311123113112211'
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(countAndSay(n), result);
    });
  });
});
