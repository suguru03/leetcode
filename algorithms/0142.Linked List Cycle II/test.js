'use strict';

const assert = require('assert');
const _ = require('lodash');
const { detectCycle } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#hasCycle', () => {
  const tests = [
    {
      head: [3, 2, 0, -4],
      pos: 1,
      result: 1,
    },
    {
      head: [1, 2],
      pos: 0,
      result: 0,
    },
    {
      head: [1],
      pos: -1,
      result: -1,
    },
  ];

  makeTestLinkNodes(tests, 'head');

  _.forEach(tests, ({ head, _head, pos, result }) => {
    let cur = head;
    while (cur.next) {
      cur = cur.next;
    }
    let last = cur;
    cur = pos < 0 ? null : head;
    while (pos-- > 0) {
      cur = cur.next;
    }
    last.next = cur;

    it(`${_head} -> ${result}`, () => {
      assert.strictEqual(detectCycle(head), cur);
    });
  });
});
