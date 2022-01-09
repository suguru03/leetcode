'use strict';

module.exports = { isRobotBounded, isRobotBounded2, isRobotBounded3, isRobotBounded4 };

/**
 * @param {string} instructions
 * @return {boolean}
 */
function isRobotBounded(instructions) {
  let x = 0;
  let y = 0;
  let cur = 0;
  for (let i = 0; i < 4; i++) {
    for (const c of instructions) {
      switch (c) {
        case 'G':
          switch (cur) {
            case 0:
              y++;
              break;
            case 1:
              x++;
              break;
            case 2:
              y--;
              break;
            case 3:
              x--;
              break;
          }
          break;
        case 'L':
          cur = (cur + 1) % 4;
          break;
        case 'R':
          cur = (cur + 3) % 4;
          break;
      }
    }
    if (x === 0 && y === 0) {
      return true;
    }
  }
  return false;
}

/**
 * @param {string} instructions
 * @return {boolean}
 */
function isRobotBounded2(instructions) {
  let x = 0;
  let y = 0;
  let cur = 0;
  const map = { x: [0, 1, 0, -1], y: [1, 0, -1, 0] };
  for (const c of instructions) {
    switch (c) {
      case 'G':
        x += map.x[cur];
        y += map.y[cur];
        break;
      case 'L':
        cur = (cur + 1) % 4;
        break;
      case 'R':
        cur = (cur + 3) % 4;
        break;
    }
  }
  return (x === 0 && y === 0) || cur > 0;
}

/**
 * @param {string} instructions
 * @return {boolean}
 */
function isRobotBounded3(instructions) {
  let x = 0;
  let y = 0;
  let cur = 0;
  for (const c of instructions) {
    switch (c) {
      case 'G':
        switch (cur) {
          case 0:
            y++;
            break;
          case 1:
            x++;
            break;
          case 2:
            y--;
            break;
          case 3:
            x--;
            break;
        }
        break;
      case 'L':
        cur = (cur + 1) % 4;
        break;
      case 'R':
        cur = (cur + 3) % 4;
        break;
    }
  }
  return (x === 0 && y === 0) || cur > 0;
}

/**
 * @param {string} instructions
 * @return {boolean}
 */
function isRobotBounded4(instructions) {
  let direction = 1;
  let positive = 1;
  const nums = [0, 0];
  for (const c of instructions) {
    if (c === 'G') {
      nums[direction] += positive ? 1 : -1;
    } else {
      [direction, positive] = [direction ^ 1, Number((direction === positive) === (c === 'L'))];
    }
  }
  return nums.every((num) => num === 0) || direction !== 1 || positive !== 1;
}
