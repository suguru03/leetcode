'use strict';

module.exports = { predictPartyVictory, predictPartyVictory2 };

/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  return round(senate) === 'R' ? 'Radiant' : 'Dire';
}

function round(senate) {
  let str = '';
  let banned = 0;
  let result = senate.charAt(0);
  for (let i = 0; i < senate.length; i++) {
    const c = senate.charAt(i);
    switch (c) {
    case 'R':
      if (banned++ >= 0) {
        str += c;
      }
      break;
    case 'D':
      if (banned-- <= 0) {
        str += c;
      }
      break;
    }
    result = result === c ? result : '';
  }
  let target;
  if (banned > 0) {
    target = 'D';
  } else if (banned < 0) {
    target = 'R';
    banned *= -1;
  }
  if (target) {
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
      const c = str.charAt(i);
      if (c !== target) {
        str2 += c;
        continue;
      }
      if (--banned === 0) {
        str2 += str.substr(i + 1);
        break;
      }
    }
    str = str2;
  }
  return result ? result : round(str);
}

/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory2(senate) {
  const l = senate.length;
  const counter = { R: 0, D: 0 };
  const array = Array(l);
  for (let i = 0; i < l; i++) {
    const c = senate.charAt(i);
    array[i] = c;
    counter[c]++;
  }
  let banned = 0;
  while (true) {
    if (counter.R === 0) {
      return 'Dire';
    }
    if (counter.D === 0) {
      return 'Radiant';
    }
    const c = array.shift();
    if (c === 'R') {
      banned++ >= 0 ? array.push(c) : counter.R--;
    } else {
      banned-- <= 0 ? array.push(c) : counter.D--;
    }
  }
}
