'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isValid } = require('./');

describe('#isValid', () => {

  const tests = [{
    s: '()',
    result: true
  }, {
    s: '()[]{}',
    result: true
  }, {
    s: '(]',
    result: false
  }, {
    s: '([])]',
    result: false
  }, {
    s: 'abacaadfa',
    result: true
  }];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(isValid(s), result);
    });
  });
});
