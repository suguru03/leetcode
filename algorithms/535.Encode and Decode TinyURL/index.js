'use strict';

module.exports = { encode, decode };

const prefix = 'http://tinyurl.com/';
const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const size = 6;
const idMap = new Map();
const urlMap = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
function encode(longUrl) {
  while (true) {
    const id = generate();
    if (urlMap.has(id)) {
      continue;
    }
    idMap.set(id, longUrl);
    urlMap.set(longUrl, id);
    return `${prefix}${id}`;
  }
}

function generate() {
  let id = '';
  for (let i = 0; i < size; i++) {
    id += str[Math.trunc(Math.random() * str.length)];
  }
  return id;
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
function decode(shortUrl) {
  const id = shortUrl.replace(prefix, '');
  return idMap.get(id);
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
