'use strict';

module.exports = { MyCalendar };

function MyCalendar() {
  this.events = [];
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  const newEvent = new Event(start, end);
  if (this.events.some(event => start < event.end && end > event.start)) {
    return false;
  }
  this.events.push(newEvent);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */

function Event(start, end) {
  this.start = start;
  this.end = end;
}
