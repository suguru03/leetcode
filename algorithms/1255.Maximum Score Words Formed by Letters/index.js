'use strict';

module.exports = { maxScoreWords };

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} scores
 * @return {number}
 */
function maxScoreWords(words, letters, scores) {
  const countMap = {};
  const cur = {};
  for (const [i] of scores.entries()) {
    const c = String.fromCharCode(i + 97);
    cur[c] = 0;
    countMap[c] = 0;
  }
  for (const c of letters) {
    countMap[c]++;
  }
  const counts = words.map(word => {
    const map = new Map();
    for (const c of word) {
      map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    return map;
  });

  let max = 0;
  func(0, 0, []);
  return max;

  function func(index, score, list) {
    loop: for (let i = index; i < counts.length; i++) {
      const map = counts[i];
      for (let [c, count] of map) {
        if (cur[c] + count > countMap[c]) {
          continue loop;
        }
      }
      for (let [c, count] of map) {
        cur[c] += count;
        score += scores[c.charCodeAt(0) - 97] * count;
      }
      list.push(i);
      const s = func(i + 1, score, list);
      list.pop(i);
      max = Math.max(max, s);
      for (let [c, count] of map) {
        cur[c] -= count;
        score -= scores[c.charCodeAt(0) - 97] * count;
      }
    }
    return score;
  }
}
