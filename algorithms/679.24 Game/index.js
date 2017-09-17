'use strict';

module.exports = { judgePoint24 };

const patterns = (function make(n) {
  const patterns = [];
  makeNext(n, {}, []);
  function makeNext(c, hash, array) {
    if (array.length === n) {
      patterns.push(array);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (hash[i]) {
        continue;
      }
      hash[i] = true;
      makeNext(c - 1, hash, array.concat(i));
      delete hash[i];
    }
  }
  return patterns;
})(4);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function judgePoint24(nums) {
  const base = [].concat(nums);
  let count = 0;
  while (nextNums()) {
    if (judge(nums)) {
      return true;
    }
  }
  return false;

  function nextNums() {
    if (count === 24) {
      return false;
    }
    const pattern = patterns[count++];
    for (let i = 0; i < pattern.length; i++) {
      nums[i] = base[pattern[i]];
    }
    return true;
  }
}

function judge(nums) {
  const op = [add, sub, mul, div];
  const handlers = [h1, h2, h3, h4, h5, h6, h7];
  for (let i = 0; i < 4; i++) {
    const op1 = op[i];
    for (let j = 0; j < 4; j++) {
      const op2 = op[j];
      for (let k = 0; k < 4; k++) {
        const op3 = op[k];
        let l = handlers.length;
        while (l--) {
          if (handlers[l](nums, op1, op2, op3) === 24) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// a + b + c + d
function h1([n0, n1, n2, n3], op1, op2, op3) {
  return op3(op2(op1(n0, n1), n2), n3);
}

// (a + b) + (c + d)
function h2([n0, n1, n2, n3], op1, op2, op3) {
  return op2(op1(n0, n1), op3(n2, n3));
}

// (a + b + c) + d
function h3([n0, n1, n2, n3], op1, op2, op3) {
  return op3(op2(op1(n0, n1), n2), n3);
}

// a + (b + c) + d
function h4([n0, n1, n2, n3], op1, op2, op3) {
  return op3(op1(n0, op2(n1, n2)), n3);
}

// a + (b + c + d)
function h5([n0, n1, n2, n3], op1, op2, op3) {
  return op1(n0, op3(op2(n1, n2), n3));
}

// a + (b + (c + d))
function h6([n0, n1, n2, n3], op1, op2, op3) {
  return op1(n0, op2(n1, op3(n2, n3)));
}

// a + b + (c + d)
function h7([n0, n1, n2, n3], op1, op2, op3) {
  return op3(op1(n0, n1), op2(n2, n3));
}
