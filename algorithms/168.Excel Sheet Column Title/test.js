'use strict';

const assert = require('assert');
const _ = require('lodash');
const { convertToTitle } = require('./');

describe('#convertToTitle', () => {

  const tests = [{
    n: 1,
    result: 'A'
  }, {
    n: 2,
    result: 'B'
  }, {
    n: 10,
    result: 'J'
  }, {
    n: 50,
    result: 'AX'
  }, {
    n: 52,
    result: 'AZ'
  }, {
    n: 78,
    result: 'BZ'
  }, {
    n: 702,
    result: 'ZZ'
  }, {
    n: 1024,
    result: 'AMJ'
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(convertToTitle(n), result);
    });
  });
});
