'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numOfBurgers } = require('./');

describe('#numOfBurgers', () => {
  const tests = [
    {
      tomatoSlices: 16,
      cheeseSlices: 7,
      result: [1, 6],
    },
    {
      tomatoSlices: 2385088,
      cheeseSlices: 164763,
      result: [],
    },
  ];

  _.forEach(tests, ({ tomatoSlices, cheeseSlices, result }) => {
    it(`${tomatoSlices}, ${cheeseSlices} -> ${result}`, () => {
      assert.deepStrictEqual(numOfBurgers(tomatoSlices, cheeseSlices), result);
    });
  });
});
