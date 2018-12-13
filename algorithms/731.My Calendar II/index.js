'use strict';

module.exports = { MyCalendarTwo };

function MyCalendarTwo() {
  this.events = [];
  this.dup = [];
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  if (this.dup.some(event => start < event.end && end > event.start)) {
    return false;
  }
  for (const event of this.events) {
    if (start < event.end && end > event.start) {
      this.dup.push(
        new Event(Math.max(start, event.start), Math.min(end, event.end)),
      );
    }
  }
  this.events.push(new Event(start, end));
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarTwo).createNew()
 * var param_1 = obj.book(start,end)
 */
/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */

function Event(start, end) {
  this.start = start;
  this.end = end;
}
