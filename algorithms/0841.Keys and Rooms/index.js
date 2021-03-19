'use strict';

module.exports = { canVisitAllRooms };

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
  const visited = new Set([0]);
  const [keys] = rooms;
  while (keys.length) {
    const key = keys.shift();
    if (visited.has(key)) {
      continue;
    }
    visited.add(key);
    keys.push(...rooms[key]);
  }
  return visited.size === rooms.length;
}
