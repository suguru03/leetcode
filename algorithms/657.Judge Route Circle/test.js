'use strict';

const assert = require('assert');
const _ = require('lodash');
const { judgeCircle } = require('./');

describe('#judgeCircle', () => {

  const tests = [{
    moves: 'UD',
    result: true
  }, {
    moves: 'LL',
    result: false
  }, {
    moves: 'UDLL',
    result: false
  }, {
    moves: 'UDLR',
    result: true
  }];

  _.forEach(tests, ({ moves, result }) => {
    it(`${moves} -> ${result}`, () => {
      assert.strictEqual(judgeCircle(moves), result);
    });
  });
});
