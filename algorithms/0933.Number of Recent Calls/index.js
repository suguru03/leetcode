const limit = 3000;
class RecentCounter {
  constructor() {
    this.queue = [];
  }
  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    const { queue } = this;
    while (queue[0] < t - limit) {
      queue.shift();
    }
    return queue.push(t);
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

module.exports = { RecentCounter };
