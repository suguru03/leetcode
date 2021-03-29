'use strict';

module.exports = { originalDigits };

const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const charSetMap = new Map();
for (const word of words) {
  for (const char of word) {
    charSetMap.set(char, charSetMap.get(char) ?? new Set());
    charSetMap.get(char).add(word);
  }
}
const wordOrderMap = new Map();
const seen = new Set();
const queue = Array.from(charSetMap);
while (queue.length) {
  const [char, set] = queue.shift();
  for (const word of set) {
    if (seen.has(word)) {
      set.delete(word);
    }
  }
  switch (set.size) {
    case 0: {
      break;
    }
    case 1: {
      const word = set.values().next().value;
      wordOrderMap.set(char, word);
      seen.add(word);
      break;
    }
    default: {
      queue.push([char, set]);
    }
  }
}

function getIndex(char) {
  return char.charCodeAt(0) - 97;
}

/**
 * @param {string} s
 * @return {string}
 */
function originalDigits(s) {
  const counts = Array(26).fill(0);
  for (const c of s) {
    counts[getIndex(c)]++;
  }
  const countMap = new Map();
  for (const [char, word] of wordOrderMap) {
    const index = getIndex(char);
    const count = counts[index];
    countMap.set(word, count);
    for (const char of word) {
      counts[getIndex(char)] -= count;
    }
  }
  return words.map((word, num) => num.toString().repeat(countMap.get(word))).join('');
}
