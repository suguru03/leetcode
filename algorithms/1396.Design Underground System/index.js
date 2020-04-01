class UndergroundSystem {
  constructor() {
    this.userMap = new Map();
    this.statsMap = new Map();
  }

  /**
   * @param {number} id
   * @param {string} stationName
   * @param {number} t
   * @return {void}
   */
  checkIn(id, stationName, t) {
    this.userMap.set(id, { stationName, t });
  }

  /**
   * @param {number} id
   * @param {string} stationName
   * @param {number} t
   * @return {void}
   */
  checkOut(id, stationName, t) {
    const from = this.userMap.get(id);
    if (!from) {
      return;
    }
    const key = this.getKey(from.stationName, stationName);
    const stats = this.statsMap.get(key) || { count: 0, total: 0 };
    this.statsMap.set(key, stats);
    stats.count++;
    stats.total += t - from.t;
  }

  getKey(from, to) {
    return `${from}:${to}`;
  }

  /**
   * @param {string} startStation
   * @param {string} endStation
   * @return {number}
   */
  getAverageTime(startStation, endStation) {
    const stats = this.statsMap.get(this.getKey(startStation, endStation));
    if (!stats) {
      return 0;
    }
    return stats.total / stats.count;
  }
}
