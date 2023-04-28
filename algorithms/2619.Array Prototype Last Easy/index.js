Array.prototype.last = function () {
  return this[this.length - 1] ?? -1;
};

Array.prototype.last = function () {
  return this.slice(-1).pop() ?? -1;
};

Array.prototype.last = function () {
  return this.at(-1) ?? -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
