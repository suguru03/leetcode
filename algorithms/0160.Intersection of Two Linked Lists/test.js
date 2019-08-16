'use strict';

const assert = require('assert');

const { getIntersectionNode } = require('./');
const { makeLinkNodes } = require('../util');

describe('#getIntersectionNode', () => {
  it('should work', () => {
    const headA = makeLinkNodes([1, 2, 3]);
    const headB = makeLinkNodes([4, 5]);
    const result = makeLinkNodes([7, 8, 9]);
    headA.next.next.next = result;
    headB.next.next = result;
    assert.strictEqual(getIntersectionNode(headA, headB), result);
  });

  it('should return null', () => {
    const headA = makeLinkNodes([1, 2, 3]);
    const headB = makeLinkNodes([4, 5, 6]);
    assert.strictEqual(getIntersectionNode(headA, headB), null);
  });
});
