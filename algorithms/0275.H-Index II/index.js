'use strict';

module.exports = { hIndex };

/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  let left = 0;
  for (let right = 0; right < citations.length; right++) {
    while (right - left - 1 >= citations[left]) {
      left++;
    }
  }
  return Math.min(citations[left] || 0, citations.length - left);
}

/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  let left = 0;
  let right = citations.length;
  while (left < right) {
    const mid = (right + (left - right) / 2) | 0;
    if (citations.length - mid <= citations[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return Math.min(citations.length - left, citations[left] || 0);
}
