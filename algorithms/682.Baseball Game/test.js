'use strict';

const assert = require('assert');
const _ = require('lodash');
const { calPoints } = require('./');

describe('#calPoints', () => {

  const tests = [{
    ops: ['5', '2', 'C', 'D', '+'],
    result: 30
  }, {
    ops: ['5', '-2', '4', 'C', 'D', '9', '+', '+'],
    result: 27
  }];

  _.forEach(tests, ({ ops, result }) => {
    it(`${ops} -> ${result}`, () => {
      assert.strictEqual(calPoints(ops), result);
    });
  });
});
