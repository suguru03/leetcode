'use strict';

const assert = require('assert');

const { minJumps } = require('./');

describe('#minJumps', () => {
  const tests = [
    {
      arr: [100, -23, -23, 404, 100, 23, 23, 23, 3, 404],
      result: 3,
    },
    {
      arr: [7],
      result: 0,
    },
    {
      arr: [7, 6, 9, 6, 9, 6, 9, 7],
      result: 1,
    },
    {
      arr: [...Array.from({ length: 1e5 }, () => 7), 11],
      result: 2,
    },
  ];

  for (const { arr, result } of tests) {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(minJumps(arr), result);
    });
  }
});
