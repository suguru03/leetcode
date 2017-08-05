'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxA } = require('./');

describe('#maxA', () => {

  const tests = [{
    N: 1,
    result: 1
  }, {
    N: 2,
    result: 2
  }, {
    N: 3,
    result: 3
  }, {
    N: 7,
    result: 9
  }, {
    N: 10,
    result: 20
  }, {
    N: 17,
    result: 144
  }, {
    N: 31,
    result: 6912
  }, {
    N: 128,
    result: 3377699720527872
  }, {
    N: 1024,
    result: 2644223875160994395807661232131084159313618731857124877138595181097623164945245383300756841758861139390364848100093433217024
  }];

  _.forEach(tests, ({ N, result }) => {
    it(`${N} -> ${result}`, () => {
      assert.strictEqual(maxA(N), result);
    });
  });
});
