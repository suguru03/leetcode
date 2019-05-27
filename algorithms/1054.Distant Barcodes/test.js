'use strict';

const assert = require('assert');
const _ = require('lodash');
const { rearrangeBarcodes } = require('./');

describe('#rearrangeBarcodes', () => {
  const tests = [
    {
      barcodes: [1, 1, 1, 2, 2, 2],
      result: [1, 2, 1, 2, 1, 2],
    },
    {
      barcodes: [1, 1, 1, 1, 2, 2, 3, 3],
      result: [1, 2, 1, 2, 1, 3, 1, 3],
    },
  ];

  _.forEach(tests, ({ barcodes, result }) => {
    it(`${barcodes} -> ${result}`, () => {
      assert.deepStrictEqual(rearrangeBarcodes(barcodes), result);
    });
  });
});
