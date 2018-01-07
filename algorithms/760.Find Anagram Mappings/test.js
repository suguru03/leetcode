'use strict';

const assert = require('assert');
const _ = require('lodash');
const { anagramMappings } = require('./');

describe('#anagramMappings', () => {

  const tests = [{
    A: [12, 28, 46, 32, 50],
    B: [50, 12, 32, 46, 28],
    result: [1, 4, 3, 2, 0]
  }];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(anagramMappings(A, B), result);
    });
  });
});
