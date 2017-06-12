'use strict';

const assert = require('assert');
const _ = require('lodash');
const { templete } = require('./');

describe('#templete', () => {

  const tests = [{
    n: 1,
    result: 1
  }, {
    n: 2,
    result: 2
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(templete(n), result);
    });
  });
});
