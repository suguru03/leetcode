'use strict';

const assert = require('assert');
const _ = require('lodash');
const { deckRevealedIncreasing } = require('./');

describe('#deckRevealedIncreasing', () => {
  const tests = [
    {
      deck: [17, 13, 11, 2, 3, 5, 7],
      result: [2, 13, 3, 11, 5, 17, 7],
    },
  ];

  _.forEach(tests, ({ deck, result }) => {
    it(`${deck} -> ${result}`, () => {
      assert.deepStrictEqual(deckRevealedIncreasing(deck), result);
    });
  });
});
