'use strict';

module.exports = { filterRestaurants };

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
function filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance) {
  return restaurants
    .filter(([, , vegan, price, distance]) => vegan >= veganFriendly && price <= maxPrice && distance <= maxDistance)
    .sort(([i1, r1], [i2, r2]) => r2 - r1 || i2 - i1)
    .map(([id]) => id);
}
