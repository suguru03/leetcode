'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numTilePossibilities } = require('./');

describe('#numTilePossibilities', () => {
  const tests = [
    {
      tiles: 'AAB',
      result: 8,
    },
    {
      tiles: 'AAABBC',
      result: 188,
    },
  ];

  _.forEach(tests, ({ tiles, result }) => {
    it(`${tiles} -> ${result}`, () => {
      assert.deepStrictEqual(numTilePossibilities(tiles), result);
    });
  });
});
