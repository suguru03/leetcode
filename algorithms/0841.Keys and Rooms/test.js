'use strict';

const assert = require('assert');

const { canVisitAllRooms } = require('./');

describe('#canVisitAllRooms', () => {
  const tests = [
    {
      rooms: [[1], [2], [3], []],
      result: true,
    },
    {
      rooms: [[1, 3], [3, 0, 1], [2], [0]],
      result: false,
    },
  ];

  for (const { rooms, result } of tests) {
    it(`${rooms} -> ${result}`, () => {
      assert.deepStrictEqual(canVisitAllRooms(rooms), result);
    });
  }
});
