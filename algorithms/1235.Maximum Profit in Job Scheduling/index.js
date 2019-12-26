'use strict';

module.exports = { jobScheduling };

class Schedule {
  constructor(start, end, profit) {
    this.start = start;
    this.end = end;
    this.profit = profit;
  }
}

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
function jobScheduling(startTime, endTime, profit) {
  const dp = Array(Math.max(...endTime)).fill(0);
  const schedules = startTime
    .map((s, index) => new Schedule(s - 1, endTime[index] - 1, profit[index]))
    .sort((s1, s2) => s1.end - s2.end);
  for (const { start, end, profit } of schedules) {
    let prev = 0;
    for (let i = start; i >= 0; i--) {
      if (dp[i] === 0) {
        continue;
      }
      prev = dp[i];
      break;
    }
    dp[end] = Math.max(dp[end], prev + profit);
  }
  return Math.max(...dp);
}
