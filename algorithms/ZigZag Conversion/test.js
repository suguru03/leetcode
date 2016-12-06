'use strict';

const assert = require('assert');
const _ = require('lodash');
const zigZagConversion = require('./');

describe('#zigZagConversion', () => {

  const tests = [{
    text: '0123456789',
    nRows: 1,
    result: '0123456789'
  }, {
    text: '0123456789',
    nRows: 2,
    result: '0246813579'
  }, {
    text: 'PAYPALISHIRING',
    nRows: 3,
    result: 'PAHNAPLSIIGYIR'
  }, {
    text: '0123456789012345',
    nRows: 4,
    result: '0621571324804395'
  }, {
    text: '012345678901234567890',
    nRows: 5,
    result: '086179572604835139420'
  }];

  _.forEach(tests, ({ text, nRows, result }) => {
    it(`${text}, nRows: ${nRows} -> ${result}`, () => {
      assert.strictEqual(zigZagConversion(text, nRows), result);
    });
  });
});
