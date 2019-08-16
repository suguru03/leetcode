'use strict';

module.exports = { lemonadeChange };

/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
  let five = 0;
  let ten = 0;
  for (const bill of bills) {
    switch (bill) {
      case 5:
        five++;
        continue;
      case 10:
        five--;
        ten++;
        break;
      case 20:
        if (ten > 0) {
          ten--;
          five--;
        } else {
          five -= 3;
        }
        break;
    }
    if (five < 0) {
      return false;
    }
  }
  return true;
}
