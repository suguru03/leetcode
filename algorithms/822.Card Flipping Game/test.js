'use strict';

const assert = require('assert');

const _ = require('lodash');

const { flipgame } = require('./');

describe('#flipgame', () => {
  const tests = [
    {
      fronts: [1, 2, 4, 4, 7],
      backs: [1, 3, 4, 1, 3],
      result: 2,
    },
  ];

  _.forEach(tests, ({ fronts, backs, result }) => {
    it(`fronts: ${fronts}, backs: ${backs} => ${result}`, () => {
      assert.deepStrictEqual(flipgame(fronts, backs), result);
    });
  });
});
