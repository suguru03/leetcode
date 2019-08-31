'use strict';

const assert = require('assert');
const _ = require('lodash');
const { MyCalendarTwo } = require('./');

describe('#MyCalendarTwo', () => {
  const tests = [
    {
      input: [[10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]],
      result: [true, true, true, false, true, true],
    },
    {
      input: [[26, 35], [26, 32], [25, 32], [18, 26], [40, 45], [19, 26], [48, 50], [1, 6], [46, 50], [11, 18]],
      result: [true, true, false, true, true, true, true, true, true, true],
    },
    {
      input: [[28, 46], [9, 21], [21, 39], [37, 48], [38, 50], [22, 39], [45, 50], [1, 12], [40, 50], [31, 44]],
      result: [true, true, true, false, false, false, true, true, false, false],
    },
  ];

  _.forEach(tests, ({ input, result }) => {
    it(`${input} -> ${result}`, () => {
      const calender = new MyCalendarTwo();
      for (let i = 0; i < input.length; i++) {
        const [start, end] = input[i];
        assert.strictEqual(calender.book(start, end), result[i], `start: ${start}, end: ${end}`);
      }
    });
  });
});
