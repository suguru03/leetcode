'use strict';

const assert = require('assert');

const { TweetCounts } = require('./');

describe('#TweetCounts', () => {
  it('should work', () => {
    const tweetCounts = new TweetCounts();
    tweetCounts.recordTweet('tweet3', 0);
    tweetCounts.recordTweet('tweet3', 60);
    tweetCounts.recordTweet('tweet3', 10);
    assert.deepStrictEqual(tweetCounts.getTweetCountsPerFrequency('minute', 'tweet3', 0, 59), [2]);
    assert.deepStrictEqual(tweetCounts.getTweetCountsPerFrequency('minute', 'tweet3', 0, 60), [2, 1]);
    tweetCounts.recordTweet('tweet3', 120);
    assert.deepStrictEqual(tweetCounts.getTweetCountsPerFrequency('hour', 'tweet3', 0, 210), [4]);
  });
});
