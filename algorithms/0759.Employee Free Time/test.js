'use strict';

const assert = require('assert');
const _ = require('lodash');
const { Interval, employeeFreeTime } = require('./');

describe('#employeeFreeTime', () => {
  const tests = [
    {
      avails: [[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]],
      result: [[3, 4]],
    },
    {
      avails: [[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]],
      result: [[5, 6], [7, 9]],
    },
  ];

  function createInterval(data) {
    return _.map(data, ([start, end]) => new Interval(start, end));
  }
  _.forEach(tests, test => {
    test._avails = test.avails;
    test.avails = _.map(test.avails, createInterval);
    test._result = test.result;
    test.result = createInterval(test.result);
  });

  _.forEach(tests, ({ _avails, avails, _result, result }) => {
    it(`${_avails} -> ${_result}`, () => {
      assert.deepStrictEqual(employeeFreeTime(avails), result);
    });
  });
});
