'use strict';

const assert = require('assert');
const _ = require('lodash');
const { distanceBetweenBusStops } = require('./');

describe('#distanceBetweenBusStops', () => {
  const tests = [
    {
      distance: [1, 2, 3, 4],
      start: 0,
      destination: 1,
      result: 1,
    },
    {
      distance: [1, 2, 3, 4],
      start: 0,
      destination: 2,
      result: 3,
    },
    {
      distance: [1, 2, 3, 4],
      start: 0,
      destination: 3,
      result: 4,
    },
  ];

  _.forEach(tests, ({ distance, start, destination, result }) => {
    it(`${distance}, ${start}, ${destination} -> ${result}`, () => {
      assert.deepStrictEqual(distanceBetweenBusStops(distance, start, destination), result);
    });
  });
});
