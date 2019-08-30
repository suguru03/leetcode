'use strict';

const assert = require('assert');
const { MyLinkedList } = require('./');

describe('MyLinkedList', () => {
  it('should work', () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
    assert.strictEqual(linkedList.get(1), 2);
    linkedList.deleteAtIndex(1); // now the linked list is 1->3
    assert.strictEqual(linkedList.get(1), 3);
    linkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
    linkedList.deleteAtIndex(0); // now the linked list is 1->3
    assert.strictEqual(linkedList.get(1), 3);
    linkedList.addAtIndex(0, 1); // linked list becomes 1->2->3
    assert.strictEqual(linkedList.get(1), 2);
    linkedList.deleteAtIndex(2); // now the linked list is 1->2
    assert.strictEqual(linkedList.get(1), 2);
    linkedList.addAtIndex(5, 3);
    assert.strictEqual(linkedList.get(2), -1);
    linkedList.addAtIndex(3, 4);
    linkedList.addAtIndex(4, 5);
    linkedList.addAtIndex(5, 6);
    assert.strictEqual(linkedList.get(4), -1);
  });

  it('should work', () => {
    const linkedList = new MyLinkedList();
    assert.strictEqual(linkedList.get(0), -1);
    linkedList.addAtIndex(1, 2);
    assert.strictEqual(linkedList.get(0), -1);
    assert.strictEqual(linkedList.get(1), -1);
    linkedList.addAtIndex(0, 1);
    assert.strictEqual(linkedList.get(0), 1);
    assert.strictEqual(linkedList.get(1), -1);
  });

  it('should work', () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtIndex(-1, 0);
    assert.strictEqual(linkedList.get(0), 0);
    linkedList.deleteAtIndex(-1);
    assert.strictEqual(linkedList.get(0), 0);
    assert.strictEqual(linkedList.get(1), -1);
  });

  it('should work', () => {
    const linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(4, 2);
    assert.strictEqual(linkedList.get(1), 3);
    linkedList.deleteAtIndex(-1);
    assert.strictEqual(linkedList.get(1), 3);
  });
});
