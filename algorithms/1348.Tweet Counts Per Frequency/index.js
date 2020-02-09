const deltaMap = {
  minute: 60,
  hour: 60 * 60,
  day: 24 * 60 * 60,
};

class TweetCounts {
  constructor() {
    this.timelineMap = new Map();
    this.sorted = new Set();
  }

  recordTweet(tweetName, time) {
    const timeline = this.timelineMap.get(tweetName) || [];
    if (timeline.length === 0) {
      this.sorted.add(tweetName);
    } else if (time < timeline[timeline.length - 1]) {
      this.sorted.delete(tweetName);
    }
    timeline.push(time);
    this.timelineMap.set(tweetName, timeline);
  }

  getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {
    const timeline = this.timelineMap.get(tweetName);
    if (!timeline) {
      return [];
    }
    if (!this.sorted.has(tweetName)) {
      this.sorted.add(tweetName);
      timeline.sort((t1, t2) => t1 - t2);
    }
    let left = 0;
    let right = timeline.length;
    while (left < right) {
      const mid = ((left + right) / 2) | 0;
      if (timeline[mid] < startTime) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    const result = [];
    const delta = deltaMap[freq];
    for (let time = startTime; time <= endTime; time += delta) {
      let count = 0;
      const end = Math.min(endTime, time + delta - 1);
      while (left < timeline.length && timeline[left] <= end) {
        left++;
        count++;
      }
      result.push(count);
    }
    return result;
  }
}

module.exports = { TweetCounts };
